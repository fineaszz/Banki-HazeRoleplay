fx_version 'cerulean'
use_experimental_fxv2_oal 'yes'
lua54 'yes'
game 'gta5'
version '1.0.0'
shared_script {
    '@es_extended/imports.lua',
    'config.lua',
}
server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'server/main.lua',
}
client_scripts {
    'client/main.lua',
}
dependencies {
    'es_extended',
}
ui_page {
    'web/index.html'
}
files {
    'web/**', 
}
