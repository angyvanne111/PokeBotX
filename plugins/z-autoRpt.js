/**
[ By @RadaAsh || https://github.com/angyvanne ]
**/
import db from '../lib/database.js'
import * as fs from 'fs'
import not from '../lib/modokuaker.js'

let handler = m => m
handler.all = async function(m) {
	if (!m.isGroup) return !1
	let chat = db.data.chats[m.chat]
	let { limit, banned } = db.data.users[m.sender]
	if (chat.isBanned) return 
	if (banned) return
	try{var userthumb=await this.profilePictureUrl(m.sender,'image')}catch{var userthumb='https://i.ibb.co/jhQ7gL0/Sin-Perfil-F.jpg'}
	let mylogo = fs.readFileSync('./multimedia/imagenes/mylogo.jpg')
	let rtps1 = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''
	let rtps2 = m.text.slice(0).trim().split(/ +/).shift().toLowerCase()
	let etiqueta = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pushname = await this.getName(m.sender)
	let redes = ['https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA?sub_confirmation=1', 'https://vm.tiktok.com/ZMLjP4RBS/', 'https://fb.watch/b7LOc9_LU2/', 'https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA']
	let reddom = redes[Math.floor(Math.random() * redes.length)]
//Random//
if (rtps1.includes("prefijo?") || (rtps1.includes("Prefijo?"))){
m.reply(`*Por si estas preguntando cual es el prefijo del bot*\n_Prefijo actual para uso de comandos_ : \n\n" *${Prefijo}* "\n`)
}
//
if (rtps2.startsWith("destraba") || rtps2.startsWith("Destraba") || rtps2.startsWith("destrava") || rtps2.startsWith("Destrava")){
if (!m.isBaileys && !m.fromMe) { this.sendMessage(m.chat,{text:not.kuakerzzz},{quoted:m})
} else {
this.sendMessage(m.chat,{text:not.kuakerzzz},{quoted:m})
m.limit = 0
}
}
//
if (rtps1.includes(".Pokebot") || rtps1.includes(".pokebot")){
m.reply(`🤖*hola, gracias por usar el bot, te comparto la lista de comandos (RECUERDA PONER UN . ANTES DE CADA COMANDO):*`)
setTimeout( () => {
m.reply(`*.Safari o .safari:* Informacion de los proximos safari zone\n\n*.sello o .Sello:* Informacion de los pokemon que pueden salir de recompensa semanal\n\n*.cd o .Cd:* informacion de los proximos dias de la comunidad\n\n*.HraDes o .hrades:* informacion de las proximas horas destacadas\n\n*.HraLeg o .hraleg:* informacion de las proximas horas legendarias*\n\n*.incleg o .IncLeg:* Informacion de los dias de cambio de incursiones legendarias\n\n.Megas o .megas:* Informacion del dia de cambio de mega incursiones\n\n*.eventos o .Eventos:* enlista los proximos eventos en el juego\n\n*.sticker:* usalo para convertir una imagen en sticker, tambien funciona con videos de menos de 10 segundos de duracion. 😎🤝`)
}, 2500)
m.limit = 0
}
if (rtps1.includes(".Safari") || rtps1.includes(".safari")){
m.reply(`🤖*hola, en un momento te comparto la informacion de los proximos safaris zone:*`)
setTimeout( () => {
m.reply(`*Lugar:AUN SIN INFORMACION DEL PROXIMO SAFARI* \n*fecha:* \n*costos aproximados:* \n*Cordenadas, por si eres un sucio fly:* 😎🤝`)
}, 2500)
m.limit = 0
}
if (rtps1.includes(".sello") || rtps1.includes(".Sello")){
m.reply(`🤖*hola, aqui esta la imagen de las recompensas del sello semanal de marzo:*`)
setTimeout( () => {
this.sendMessage(m.chat, { image: {url: 'https://i.postimg.cc/pdnBwYPx/marzo.jpg' }, caption: `*suerte con tus shiny*` }, { quoted: m })
}, 2500)
m.limit = 0
}
if (rtps1.includes(".cd") || rtps1.includes(".Cd")){
m.reply(`🤖*hola, en un momento te comparto la informacion de los proximos dias de la comunidad:*`)
setTimeout( () => {
this.sendMessage(m.chat, { image: {url: 'https://i.postimg.cc/Qdvdssjd/slow.jpg' }, caption: `*18/Marzo:* Aun sin informacion del protagonista\n*evolucion:* Sin informacion\n*ataque legado:* Sin informacion\n*bonus:* sin informacion` }, { quoted: m })
}, 2500)
m.limit = 0
}
if (rtps1.includes(".HraDes") || rtps1.includes(".hrades")){
m.reply(`🤖*buscando las siguientes horas destacadas:*`)
setTimeout( () => {
this.sendMessage(m.chat, { image: {url: 'https://i.postimg.cc/xCGjF77m/eevee.jpg' }, caption: `*07/Marzo:* Eevee\n*bonus:* caramelos x2 al treansferir\n*14/Marzo:* Rowlet\n*bonus:* doble experiencia al evolucionar\n*21/Marzo:* Litten\n*bonus:* polvo estelar doble por captura\n*28/Marzo:* Popplio\n*bonus:* doble experiencia por captura` }, { quoted: m })
}, 2500)
m.limit = 0
}
if (rtps1.includes(".HraLeg") || rtps1.includes(".hraleg")){
m.reply(`🤖*buscando las siguientes horas legendarias:*`)
setTimeout( () => {
this.sendMessage(m.chat, { image: {url: 'https://i.postimg.cc/c4qDMJG6/tornadus-2.jpg' }, caption: `*01/Marzo:* Tornadus forma Avatar\n*08/MArzo:* Ho-Oh\n*15/MArzo:* Ho-Oh\n*22/MArzo:* Thundurus forma Avatar\n*29/MArzo:* Lugia` }, { quoted: m })
}, 2500)
m.limit = 0
}
if (rtps1.includes(".IncLeg") || rtps1.includes(".incleg")){
m.reply(`🤖*buscando las llegadas de las proximas raid legendarias del mes:*`)
setTimeout( () => {
this.sendMessage(m.chat, { image: {url: 'https://i.postimg.cc/mrq3Ldbh/tornadus.jpg' }, caption: `*01/Marzo:* Tornadus forma Avatar\n*08/Marzo:* Ho-Oh\n*21/MArzo:* Thundurus forma Avatar\n*28/Marzo:* Lugia` }, { quoted: m })
}, 2500)
m.limit = 0
}
if (rtps1.includes(".Megas") || rtps1.includes(".megas")){
m.reply(`🤖*buscando las llegadas de las proximas raid tipo mega del mes:*`)
setTimeout( () => {
this.sendMessage(m.chat, { image: {url: 'https://i.postimg.cc/ThM9YK0F/charizard-y.jpg' }, caption: `*01/Marzo:* Charizard forma Y\n*08/Marzo:* Medicham\n*21/Marzo:* Venasaur\n*28/Marzo:* Alakazam` }, { quoted: m })
}, 2500)
m.limit = 0
}
if (rtps1.includes(".eventos") || rtps1.includes(".Eventos")){
m.reply(`🤖*hola enviando los siguientes eventos:*`)
setTimeout( () => {
this.sendMessage(m.chat, { image: {url: 'https://i.postimg.cc/D0SN2Vv7/colores.jpg' }, caption: `*✮01/Marzo:* nueva temporada del juego llamada Rising Heroes\n\n*✮05/Marzo:* Evento objetivo de captura\n\n*✮08/Marzo:* Festival de los colores\n\n*✮11/Marzo:* Incursiones elite con regidrago\n\n*✮21/Marzo:* Heroe cotidiano y toma de control del team go rocket\n\n*✮25/Marzo:* Dia de combates Go` }, { quoted: m })
}, 2500)
m.limit = 0
}
//Insultos
if (rtps1.includes("puto") || (rtps1.includes("Puto") || (rtps1.includes("come tierra") || (rtps1.includes("Inutil") || (rtps1.includes("Pinche ") || (rtps1.includes("pinche") || (rtps1.includes("bot gay") || (rtps1.includes("Bot gay") || (rtps1.includes("bot bobo") || (rtps1.includes("tonto bot"))))))))))){
let resrand = pickRandom(["chingadazos", "enojado", "no hay", "no no no", "oigaaa"])
this.sendMessage(m.chat, {sticker: {url: "https://github.com/angyvanne/PokeBotX/tree/main/multimedia/misstks/"+resrand+".webp"}, mentions: [m.sender]}, {quoted: {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${pushname}: ${m.text}`, 'jpegThumbnail': mylogo}}} })
m.limit = 0
}

//Simp bot gaaa :u
if (rtps1.includes("bot gracias") || (rtps1.includes("Bot gracias") || (rtps1.includes("gracias bot") || (rtps1.includes("Gracias bot"))))){
this.sendMessage(m.chat, { text: `@${etiqueta.replace(/@.+/, '')} no es nada sucio fly uwu`, mentions: [m.sender] }, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "16505434800@s.whatsapp.net" } : {}) },message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": mylogo},"title": `${NombreDelBot}`,"description": "@NeKosmic", "currencyCode": "PEN","priceAmount1000": "5000000","salePriceAmount1000": "500","url": "https://github.com/NeKosmic","retailerId": `000000`,"productImageCount": 5},"businessOwnerJid": `0@s.whatsapp.net` }}}})
m.limit = 0
}
if (rtps1.includes("te amo") || (rtps1.includes("Te amo") || (rtps1.includes("te quiero") || (rtps1.includes("Te quiero"))))){
let resrand = pickRandom(["beso 1", "no hay", "Ala"])
this.sendMessage(m.chat, {sticker: {url: "https://github.com/angyvanne/PokeBotX/tree/main/multimedia/misstks/"+resrand+".webp"}, mentions: [m.sender]}, {quoted: {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${pushname} <3`,jpegThumbnail: mylogo}}} })
m.limit = 0
}

//Si 🧐//
if (rtps2.includes("uwu")){
let resrand = pickRandom(["cringe1", "cringe2", "cringe3", "cringe4", "cringe5"])
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/"+resrand+".webp"}}, { quoted: m } )
m.limit = 0
}
if (rtps2.includes("owo")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/owobot.webp"}}, { quoted: m } )
m.limit = 0
}
if (rtps2.startsWith("awa")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/awabot.webp"}}, { quoted: m } )
m.limit = 0
}
if (rtps2.startsWith("ewe")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/ewebot.webp"}}, { quoted: m } )
m.limit = 0
}
if (rtps2.includes("unu")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/unubot.webp"}}, { quoted: m } )
m.limit = 0
}
if (rtps2.includes("7v7")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/7v7bot.webp"}}, { quoted: m } )
m.limit = 0
}
if (rtps2.includes("7w7")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/7w7bot.webp"}}, { quoted: m } )
m.limit = 0
}
if (rtps2.includes("7u7")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/7u7bot.webp"}}, { quoted: m } )
m.limit = 0
}

//Fuertes insultos :v
if (rtps2.includes("tonto")){
m.reply(`
█▀ █▀▀ █▄░█ █▀█ █▀█   █▀▄ █▀▀ ░░█ █▀▀   █▀▄ █▀▀   █ █▄░█ █▀ █░█ █░░ ▀█▀ ▄▀█ █▀█   █▀█   █▀ █▀▀ █▀█ ▄▀█
▄█ ██▄ █░▀█ █▄█ █▀▄   █▄▀ ██▄ █▄█ ██▄   █▄▀ ██▄   █ █░▀█ ▄█ █▄█ █▄▄ ░█░ █▀█ █▀▄   █▄█   ▄█ ██▄ █▀▄ █▀█

█▄▄ ▄▀█ █▄░█ █▀▀ ▄▀█ █▀▄ █▀█
█▄█ █▀█ █░▀█ ██▄ █▀█ █▄▀ █▄█\n\n*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*tonto*_`)
m.limit = 0
}
if (rtps2.includes("bobo")){
m.reply(`opɐǝuɐq ɐ̗ɹǝs o ɹɐʇʅnsuᴉ ǝp ǝɾǝp ɹoṵǝs\n\n*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*bobo*_`)
m.limit = 0
}
if (rtps2.includes("idiota")){
m.reply(`s̷e̷ñ̷o̷r̷ d̷e̷j̷e̷ d̷e̷ i̷n̷s̷u̷l̷t̷a̷r̷ o̷ s̷e̷r̷á̷ b̷a̷n̷e̷a̷d̷o̷*\n\nˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*idiota*_`)
m.limit = 0
}
if (rtps2.includes("joto")){
m.reply(`🆂🅴🅽̃🅾🆁 🅳🅴🅹🅴 🅳🅴 🅸🅽🆂🆄🅻🆃🅰🆁 🅾 🆂🅴🆁🅰 🅱🅰🅽🅴🅰🅳🅾\n\n*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*joto* _`)
m.limit = 0 
}
if (rtps2.includes("menso")){
m.reply(`丂🝗𝓝̃ㄖ尺 ᗪ🝗丿🝗 ᗪ🝗 讠𝓝丂ㄩ㇄〸闩尺 ㄖ 丂🝗尺闩́ ⻏闩𝓝🝗闩ᗪㄖ\n\n*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*menso*_`)
m.limit = 0
}
if (rtps2.includes("pamplinas")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵃᵐᵖˡᶦⁿᵃˢ*_`)
m.limit = .
}
if (rtps2.includes("chispas")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᶜʰᶦˢᵖᵃˢ*_`)
m.limit = 0
}

//fakemsj - no es real . _.
if (rtps1.includes("pasen porno") || (rtps1.includes("Pasen porno") || (rtps1.includes("zelda") || (rtps1.includes("nopor"))))){
this.sendMessage(m.chat, { text: `https://www.interpol.int 𝙸𝚗𝚝𝚎𝚛𝚙𝚘𝚕 𝚖𝚘𝚗𝚒𝚝𝚘𝚛𝚎𝚊 𝚕𝚘𝚜 𝚐𝚛𝚞𝚙𝚘𝚜 𝚍𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙\n*${pushname}️* , 𝚂𝚎𝚐𝚞𝚗 𝚕𝚊𝚜 𝚗𝚘𝚛𝚖𝚊𝚜 𝚍𝚎 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙 𝚎𝚜𝚎 𝚝𝚒𝚙𝚘 𝚍𝚎 𝚖𝚊𝚝𝚎𝚛𝚒𝚊𝚕 𝚎𝚜𝚝𝚊𝚗 𝚙𝚛𝚘𝚑𝚒𝚋𝚒𝚍𝚘𝚜, 𝙿𝚘𝚛 𝚛𝚊𝚣??𝚗𝚎𝚜 𝚍𝚎 𝚜𝚎𝚐𝚞𝚛𝚒𝚍𝚊𝚍 𝚝𝚞 𝚗𝚞𝚖𝚎𝚛𝚘 𝚜𝚎𝚛𝚊 𝚊𝚐𝚎𝚗𝚍𝚊𝚍𝚘 𝚎𝚗 𝚕𝚊 *Database...*`, mentions: [m.sender] }, {quoted: {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "51995386439-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync('./multimedia/imagenes/rgdata.jpg'), surface: 200, message: `Usuario: ${pushname}\nNumero: ${etiqueta}`, orderTitle: 'Matt_M', sellerJid: '0@s.whatsapp.net'}}} })
m.limit = 0
}

//autorrespuesta multimedia
if (rtps1.includes("buenos dias") || (rtps1.includes("Buenos dias") || (rtps1.includes("buenos días") || (rtps1.includes("Buenos días"))))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/angyvanne/PokeBotX/blob/main/multimedia/sonidos/Bdia.m4a?raw=true"}, fileName: `BonDia_xd.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 0
}
if (rtps1.includes("feliz navidad") || (rtps1.includes("Feliz navidad"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/angyvanne/PokeBotX/blob/main/multimedia/sonidos/feliz%20naviad%20inmundo%20animal.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Feliz naviad >~<`, body: `PokebotMx`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `FNavi.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 0
}
if (rtps1.includes("Hola") || (rtps1.includes("hola"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/angyvanne/PokeBotX/blob/main/multimedia/sonidos/hola%20enfermera.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `HOla (o-o)`, body: `PokeBotMx`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `Hola.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 0
}
if (rtps1.includes("Feliz cumpleaños") || (rtps1.includes("feliz cumpleaños"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/angyvanne/PokeBotX/blob/main/multimedia/sonidos/cumple.mp3?raw=true"}, contextInfo:{externalAdReply: {title: `Felicidades <=^-^=>`, body: `PokeBotMx`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `FeliCumple.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 0
}
if (rtps1.includes("callados") || (rtps1.includes("Callados"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/angyvanne/PokeBotX/blob/main/multimedia/sonidos/Murio.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Despierten `, body: `PokeBotMx`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `despierten.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 0
}
if (rtps1.includes("maricon") || (rtps1.includes("joto") || (rtps1.includes("manco") || (rtps1.includes("gay") || (rtps1.includes("Maricon") || (rtps1.includes("Joto") || (rtps1.includes("Manco") || (rtps1.includes("Gay"))))))))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/angyvanne/PokeBotX/blob/main/multimedia/sonidos/insultar.mp3?raw=true"}, contextInfo:{externalAdReply: {title: `deja de insultar, joder`, body: `PokeBotMx`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `insultos.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 0
}
if (rtps1.includes("son novios") || (rtps1.includes("Son novios"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/angyvanne/PokeBotX/blob/main/multimedia/sonidos/vivan.mp3?raw=true"}, contextInfo:{externalAdReply: {title: `Amigo, ustedes son novios??`, body: `PokeBotMx`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `novios.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 0
}
if (rtps2.startsWith("woau")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/woau.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Kawaii >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `woau.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("unga")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/unga.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Ungaaa >//<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `unga.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("umai")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/umai.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Umai... >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `umai.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("imaaa")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/uma.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Imaaa! >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `uma.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("uchinchi")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/uchinchi.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Uchinchi >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `uchinchi.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("tuturu")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/tuturu.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Tuturu >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `tuturu.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("talcho")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/talcho.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Talcho >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `talcho.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("ssss")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/sss.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Suprise!!! >w<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `ssss.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("ohayou") || (rtps2.includes("Ohayou") || (rtps2.includes("ohayo") || (rtps2.includes("Ohayo"))))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/ohayo.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Ohayo >//<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `ohayou.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("sempai")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/sempai.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Sempai >//<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `sempai.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("pupu")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/pupu.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Pupu >.<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `pupu.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("pikachu")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/pikachu.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Pikachu ⚡`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `pikachu.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("ooaa")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/ooaa.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Ooaa >-<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `ooaa.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("omg")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/omg.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `OMG >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `omg.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("omaiwa")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/omaiwa.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Omaiwa >o<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `omaiwa.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("omaiga")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/omaiga.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Omaiga >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `omaiga.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("ñañañi")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/ñañañi.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Ñañañi >-<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `ñañañi.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("ñaña")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/ñaña.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Ñaña >.<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `ñaña.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("nya")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/nya.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Nya ^-^`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `nya.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("niconico")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/niconico.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Nico-nico >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `niconico.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("nani")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/nani.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Nani >_<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `nani.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("motomoto")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/motomoto.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Motomoto >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `motomoto.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("mma")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/mma.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Mma... >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `mma.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("mitamita")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/mitamita.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Mita-mita >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `mitamita.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("kobarashi")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/kobarashi.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Kobarashi >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `kobarashi.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("kataka")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/kataka.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Kataka >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `kataka.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("jai")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/jai.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Jai... >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `jai.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("jentai")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/hentai.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Jentai 7w7`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `jentai.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("asennn")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/asen.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Asennn! >o<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `asennn.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("anana")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/anana.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Anana >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `anana.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
//
if (rtps1.includes("papu papu") || (rtps1.includes("Papu papu"))){
await this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/papus.m4a?raw=true"}, fileName: `${pushname}.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/papudance.webp"}}, { quoted: m } )
}
if (rtps1.includes("ª")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/aaa.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `ª`, body: `ª`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `a.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("ara ara") || (rtps1.includes("Ara ara"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/araara.mp3?raw=true"}, contextInfo:{externalAdReply: {title: `Ara-ara >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `araara.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.startsWith("yamete") || (rtps1.startsWith("Yamete"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/ya.mp3?raw=true"}, contextInfo:{externalAdReply: {title: `Yamete >//<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `yamete.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}

//
//
if (rtps1.includes("si 👍") || (rtps1.includes("Si 👍"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/si_sp.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Si 👍`, body: `Joseph_A`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `si_laik.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("no returbio") || (rtps1.includes("No returbio") || (rtps1.includes("No re turbio") || (rtps1.includes("No re turbio"))))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/turrbio.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `No!, Re-Turbio... ._.`, body: `Joseph_A`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `si_laik.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("oh me vengo") || (rtps1.includes("Oh me vengo"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/ohhh_xd.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Oh! me vengo... 🥵`, body: `Joseph_A`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `si_laik.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("con flores") || (rtps1.includes("Con flores"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/con_flores.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `🥀 Con flores... 🌹`, body: `Joseph_A`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `si_laik.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("no digas eso papu") || (rtps1.includes("No digas eso papu"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/no_papu.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `No papu :'v`, body: `Joseph_A`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `si_laik.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("no chupala") || (rtps1.includes("No chupala"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/no-chupala.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `No, chupala... 😎`, body: `Joseph_A`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `si_laik.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}

//God :v
if (rtps2.includes("tesla")){
this.sendMessage(m.chat, {sticker: fs.readFileSync('./multimedia/misstks/teslagod.webp'), mentions: [m.sender] }, { quoted: {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `Nikola Tesla:\n10-07-1856\n07-01-1943`, 'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/teslagod.jpeg')}}} } )
}
return !0
}

export default handler
