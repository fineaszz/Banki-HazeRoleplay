ESX = exports["es_extended"]:getSharedObject()

local function notifyPlayer(source, message, type)
    TriggerClientEvent('esx:showNotification', source, message)
end

local function getTransactionTitle(transactionType)
    local titles = {
        deposit = 'Wpłata gotówki',
        withdrawal = 'Wypłata gotówki',
        transfer_in = 'Otrzymano przelew',
        transfer_out = 'Wysłano przelew'
    }
    return titles[transactionType] or 'Inna transakcja'
end

local function fetchBankData(identifier, callback)
    MySQL.Async.fetchAll('SELECT * FROM bank_accounts WHERE identifier = @identifier', {
        ['@identifier'] = identifier
    }, function(accountResult)
        local bankData = accountResult[1]
        MySQL.Async.fetchAll('SELECT * FROM bank_transactions WHERE identifier = @identifier ORDER BY date DESC LIMIT 10', {
            ['@identifier'] = identifier
        }, function(transactions)
            local history = {}
            local lastPaymentsSum = 0
            for _, transaction in ipairs(transactions) do
                local title = getTransactionTitle(transaction.type)

                table.insert(history, {
                    id = transaction.id,
                    type = transaction.type,
                    title = title,
                    amount = transaction.amount,
                    date = transaction.date,
                    target = transaction.target or ''
                })

                if transaction.type == 'withdrawal' or transaction.type == 'transfer_out' then
                    lastPaymentsSum = lastPaymentsSum + math.abs(transaction.amount)
                end
            end
            callback(bankData, history, lastPaymentsSum)
        end)
    end)
end

RegisterNetEvent('haze-bank:server:openBank')
AddEventHandler('haze-bank:server:openBank', function()
    local _source = source
    local xPlayer = ESX.GetPlayerFromId(_source)
    if not xPlayer then return end

    fetchBankData(xPlayer.identifier, function(bankData, history, lastPaymentsSum)
        local data = {
            account = bankData ~= nil,
            name = xPlayer.getName(),
            password = bankData and bankData.password or nil,
            history = history,
            money = xPlayer.getAccount('bank').money,
            lastPayments = lastPaymentsSum,
            img = Config.UserImageURL,
        }
        TriggerClientEvent('haze-bank:client:openUi', _source, data)
    end)
end)

RegisterNetEvent('haze-bank:server:registerAccount')
AddEventHandler('haze-bank:server:registerAccount', function(password)
    local _source = source
    local xPlayer = ESX.GetPlayerFromId(_source)
    if not xPlayer then return end

    MySQL.Async.execute('INSERT INTO bank_accounts (identifier, account_number, password) VALUES (@identifier, @account_number, @password)', {
        ['@identifier'] = xPlayer.identifier,
        ['@account_number'] = xPlayer.source,
        ['@password'] = password
    }, function(rowsChanged)
        if rowsChanged > 0 then
            notifyPlayer(_source, 'Konto bankowe zostało utworzone.', 'success')
            fetchBankData(xPlayer.identifier, function(bankData, history, lastPaymentsSum)
                local data = {
                    account = true,
                    name = xPlayer.getName(),
                    password = bankData.password,
                    history = history,
                    money = xPlayer.getAccount('bank').money,
                    lastPayments = lastPaymentsSum,
                    img = Config.UserImageURL,
                }
                TriggerClientEvent('haze-bank:client:openUi', _source, data)
            end)
        else
            notifyPlayer(_source, 'Nie udało się utworzyć konta bankowego.', 'error')
        end
    end)
end)

local function handleTransaction(source, xPlayer, type, amount, targetAccount)
    if not amount or amount <= 0 then
        notifyPlayer(source, 'Nieprawidłowa kwota.', 'error')
        return
    end

    if type == 'deposit' then
        local cash = xPlayer.getMoney()
        if cash >= amount then
            xPlayer.removeMoney(amount)
            xPlayer.addAccountMoney('bank', amount)
            MySQL.Async.execute('INSERT INTO bank_transactions (identifier, type, amount) VALUES (@identifier, @type, @amount)', {
                ['@identifier'] = xPlayer.identifier,
                ['@type'] = 'deposit',
                ['@amount'] = amount
            }, function()
                fetchBankData(xPlayer.identifier, function(bankData, history, lastPaymentsSum)
                    TriggerClientEvent('haze-bank:client:updateMoney', source, {money = xPlayer.getAccount('bank').money, lastPayments = lastPaymentsSum})
                end)
                notifyPlayer(source, 'Wpłaciłeś $' .. amount, 'success')
            end)
        else
            notifyPlayer(source, 'Nie masz wystarczająco gotówki.', 'error')
        end
    elseif type == 'withdrawal' then
        local bankMoney = xPlayer.getAccount('bank').money
        if bankMoney >= amount then
            xPlayer.removeAccountMoney('bank', amount)
            xPlayer.addMoney(amount)
            MySQL.Async.execute('INSERT INTO bank_transactions (identifier, type, amount) VALUES (@identifier, @type, @amount)', {
                ['@identifier'] = xPlayer.identifier,
                ['@type'] = 'withdrawal',
                ['@amount'] = amount
            }, function()
                fetchBankData(xPlayer.identifier, function(bankData, history, lastPaymentsSum)
                    TriggerClientEvent('haze-bank:client:updateMoney', source, {money = xPlayer.getAccount('bank').money, lastPayments = lastPaymentsSum})
                end)
                notifyPlayer(source, 'Wypłaciłeś $' .. amount, 'success')
            end)
        else
            notifyPlayer(source, 'Nie masz wystarczająco pieniędzy na koncie.', 'error')
        end
    elseif type == 'transfer' and targetAccount then
        MySQL.Async.fetchAll('SELECT identifier FROM bank_accounts WHERE account_number = @account_number LIMIT 1', {
            ['@account_number'] = targetAccount
        }, function(result)
            if result[1] then
                local targetIdentifier = result[1].identifier
                local targetPlayer = ESX.GetPlayerFromIdentifier(targetIdentifier)

                if xPlayer.getAccount('bank').money >= amount then
                    xPlayer.removeAccountMoney('bank', amount)
                    if targetPlayer then
                        targetPlayer.addAccountMoney('bank', amount)
                        notifyPlayer(targetPlayer.source, 'Otrzymałeś $' .. amount .. ' od ' .. xPlayer.getName(), 'success')
                    else
                        MySQL.Async.execute('UPDATE bank_accounts SET balance = balance + @amount WHERE identifier = @identifier', {
                            ['@amount'] = amount,
                            ['@identifier'] = targetIdentifier
                        })
                    end

                    MySQL.Async.execute('INSERT INTO bank_transactions (identifier, type, amount, target) VALUES (@identifier, @type, @amount, @target)', {
                        ['@identifier'] = xPlayer.identifier,
                        ['@type'] = 'transfer_out',
                        ['@amount'] = amount,
                        ['@target'] = targetAccount
                    })

                    MySQL.Async.execute('INSERT INTO bank_transactions (identifier, type, amount, target) VALUES (@identifier, @type, @amount, @target)', {
                        ['@identifier'] = targetIdentifier,
                        ['@type'] = 'transfer_in',
                        ['@amount'] = amount,
                        ['@target'] = xPlayer.identifier
                    })

                    fetchBankData(xPlayer.identifier, function(bankData, history, lastPaymentsSum)
                        TriggerClientEvent('haze-bank:client:updateMoney', source, {money = xPlayer.getAccount('bank').money, lastPayments = lastPaymentsSum})
                    end)

                    notifyPlayer(source, 'Przelałeś $' .. amount, 'success')
                else
                    notifyPlayer(source, 'Nie masz wystarczająco pieniędzy na koncie.', 'error')
                end
            else
                notifyPlayer(source, 'Nie znaleziono docelowego konta.', 'error')
            end
        end)
    else
        notifyPlayer(source, 'Nieprawidłowa operacja.', 'error')
    end
end

RegisterNetEvent('haze-bank:server:depositMoney')
AddEventHandler('haze-bank:server:depositMoney', function(amount)
    local _source = source
    local xPlayer = ESX.GetPlayerFromId(_source)
    if not xPlayer then return end

    handleTransaction(_source, xPlayer, 'deposit', tonumber(amount))
end)

RegisterNetEvent('haze-bank:server:withdrawMoney')
AddEventHandler('haze-bank:server:withdrawMoney', function(amount)
    local _source = source
    local xPlayer = ESX.GetPlayerFromId(_source)
    if not xPlayer then return end

    handleTransaction(_source, xPlayer, 'withdrawal', tonumber(amount))
end)

RegisterNetEvent('haze-bank:server:transferMoney')
AddEventHandler('haze-bank:server:transferMoney', function(amount, targetAccount)
    local _source = source
    local xPlayer = ESX.GetPlayerFromId(_source)
    if not xPlayer then return end

    handleTransaction(_source, xPlayer, 'transfer', tonumber(amount), targetAccount)
end)
