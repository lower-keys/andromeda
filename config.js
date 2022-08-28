const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

//api
global.xteam = 'apivproject'
global.lolhuman = 'yourkey'

// Other
global.owner = ['6288269131506']
global.premium = ['6288269131506']
global.ownername = 'Choco'
global.botname = '滝な。BOT'
global.packname = '© Choco'
global.gc = 'https://github.com/lower-keys'
global.linkyt = '-ga ada'
global.linkgc = 'belum buat gc'
global.limitawal = '10'
global.author = '@Choco\n滝な'
global.sessionName = 'choco'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⌕'
global.mess = {
    success: 'Berhasil',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu sebentar, sedang di proses',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.sc = { url: 'https://i.postimg.cc/8zCXVkyY/ce6ffeea35742410166301aede74af0d.jpg' }
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = { url: 'https://i.postimg.cc/g01ZNptQ/2581c5803ef77dfad121830c07873129.jpg' }
global.allmenu = fs.readFileSync('./media/allmenu.jpg')
global.thumb = { url: 'https://i.postimg.cc/8zCXVkyY/ce6ffeea35742410166301aede74af0d.jpg' }
global.visoka = { url: 'https://telegra.ph/file/769d88bb8c8357546a149.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
