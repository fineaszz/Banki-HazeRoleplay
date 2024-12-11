ESX = exports["es_extended"]:getSharedObject()
local bankLocations = {}

local function createBlip(conf)
    local blip = AddBlipForCoord(conf.coords.x, conf.coords.y, conf.coords.z)
    SetBlipSprite(blip, 207)
    SetBlipDisplay(blip, 4)
    SetBlipScale(blip, 0.7)
    SetBlipColour(blip, 2)
    SetBlipAsShortRange(blip, true)
    BeginTextCommandSetBlipName("STRING")
    AddTextComponentString(conf.label or 'Bank')
    EndTextCommandSetBlipName(blip)
end

local function sendUI(action, data)
    SendNUIMessage({action = action, data = data})
end

local function transformHistory(history)
    local transformed = {}
    for _, transaction in ipairs(history) do
        local positive = transaction.type == 'deposit' or transaction.type == 'transfer_in'
        local name = transaction.type == 'deposit' and 'Wpłata gotówki' or
                     transaction.type == 'withdrawal' and 'Wypłata gotówki' or
                     transaction.type == 'transfer_in' and 'Otrzymano przelew' or
                     transaction.type == 'transfer_out' and 'Wysłano przelew' or
                     'Inna transakcja'
        table.insert(transformed, {
            id = transaction.id,
            positive = positive,
            name = name,
            money = transaction.amount,
            date = transaction.date,
            target = transaction.target or ''
        })
    end
    return transformed
end

Citizen.CreateThread(function()
    while not ESX.PlayerLoaded do
        Citizen.Wait(100)
    end

    exports.ox_target:addModel(Config.Models, {
        {
            label = 'Bankomat',
            icon = 'fa-solid fa-dollar-sign',
            distance = 3,
            onSelect = function()
                TriggerServerEvent('haze-bank:server:openBank')
            end,
        }
    })

    for _, conf in ipairs(Config.Bank) do
        if not conf.hideBlip then createBlip(conf) end
        table.insert(bankLocations, {coords = vector3(conf.coords.x, conf.coords.y, conf.coords.z), size = conf.size})

        exports.ox_target:addBoxZone({
            coords = conf.coords,
            options = {
                {
                    name = 'openBank',
                    label = 'Otwórz bank',
                    icon = 'fa-solid fa-university',
                    distance = 3,
                    onSelect = function()
                        TriggerServerEvent('haze-bank:server:openBank')
                    end,
                }
            },
            debug = false,
        })
    end
end)

local function openUi(data)
    local transformedHistory = transformHistory(data.history)
    local lastPaymentsSum = data.lastPayments or 0

    Citizen.CreateThread(function()
        Citizen.Wait(100)
        sendUI('open', {
            account = data.account or false,
            name = data.name,
            password = data.password,
            history = transformedHistory,
            money = data.money,
            lastPayments = lastPaymentsSum,
            img = data.img,
        })
    end)
    SetNuiFocus(true, true)
end

local function updateMoney(data)
    sendUI('update', data)
end

local callbacks = {
    register = function(data)
        TriggerServerEvent('haze-bank:server:registerAccount', data.password)
        SetNuiFocus(false, false)
    end,
    deposit = function(data)
        TriggerServerEvent('haze-bank:server:depositMoney', data.money)
    end,
    withdraw = function(data)
        TriggerServerEvent('haze-bank:server:withdrawMoney', data.money)
    end,
    transfer = function(data)
        TriggerServerEvent('haze-bank:server:transferMoney', data.money, data.account)
    end,
    close = function()
        SetNuiFocus(false, false)
    end,
}

for event, cb in pairs(callbacks) do
    RegisterNUICallback(event, cb)
end

RegisterNetEvent('haze-bank:client:openUi', openUi)
RegisterNetEvent('haze-bank:client:updateMoney', updateMoney)
RegisterNetEvent('woro-hud:updateColor', function(data)
    sendUI("updateColor", data)
end)
