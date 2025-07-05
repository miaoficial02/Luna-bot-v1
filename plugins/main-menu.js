let handler = async (m, { conn, args }) => {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let user = global.db.data.users[userId]
    let name = conn.getName(userId)
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length
    
    let txt = `
Hola! Estrellitas Soy  *${botname}*☆
꒷︶꒷꒥꒷‧₊˚꒷︶꒷꒥꒷‧₊˚꒷︶꒷꒥꒷‧₊˚꒷︶꒷꒥꒷‧₊˚
『★•ᥲ𝗊ᥙі 𝗍іᥱᥒᥱs mіs ᥣіs𝗍ᥲs ძᥱ ᥴ᥆mᥲᥒძ᥆s•★』
╭── ── ──𓆩۟♱𝅮۟𓆪─── ── ──
┋ᰔ Cliente » @${userId.split('@')[0]}
┋❀ Modo » Publico
┋✦ Bot » ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥' : 'Sub Bot 🅑')}
┋ⴵ Activada » ${uptime}
┋✰ Usuarios » ${totalreg}
┋✧ Comandos » ${totalCommands}
┋🜸 Baileys » Multi Device
╰─ ── ───𓆩۟♱𝅮۟𓆪─── ── ──

Crea un *Sub-Bot* utilizando tu número con *#qr* o *#code*

╔═════════════════════
║💻#menuinfo → 𝐈𝐧𝐟𝐨-𝐛𝐨𝐭
╚═════════════════════
╔═════════════════════
║📥#menudescarga → 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐬
╚═════════════════════
╔═════════════════════
║💰#menueconomia → 𝐄𝐜𝐨𝐧𝐨𝐦𝐢́𝐚
╚═════════════════════
╔═════════════════════
║👥#menugrupo → 𝐆𝐫𝐮𝐩𝐨𝐬
╚═════════════════════
╔═════════════════════
║🎲#menujuegos → 𝐉𝐮𝐞𝐠𝐨𝐬
╚═════════════════════
╔═════════════════════
║🔞#menunsfw → 𝐍𝐒𝐅𝐖
╚═════════════════════
╔═════════════════════
║🎭#menuanime → 𝐀𝐧𝐢𝐦𝐞
╚═════════════════════
╔═════════════════════
║🎨#menustickers → 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬
╚═════════════════════
╔═════════════════════
║🧰#menuherramientas → 𝐇𝐞𝐫𝐫𝐚𝐦𝐢𝐞𝐧𝐭𝐚𝐬
╚═════════════════════
╔═════════════════════
║👤#menuperfil → 𝐏𝐞𝐫𝐟𝐢𝐥
╚═════════════════════
╔═════════════════════
║💖#menugacha → 𝐆𝐚𝐜𝐡𝐚
╚═════════════════════
> ✧ 𝐔𝐬𝐚 𝐞𝐥 𝐌𝐞𝐧𝐮́ 𝐪𝐮𝐞 𝐩𝐫𝐞𝐟𝐢𝐞𝐫𝐚𝐬`.trim()

  await conn.sendMessage(m.chat, { 
text: txt,
contextInfo: {
mentionedJid: [m.sender, userId],
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363401685685396@g.us",
newsletterName: "𝐿𝑈𝑁𝐴-𝐵𝑂𝑇",
serverMessageId: -1,
},
forwardingScore: 999,
externalAdReply: {
title: "𝐿𝑈𝑁𝐴-𝐵𝑂𝑇-𝑀𝐷",
body: textbot,
thumbnailUrl: "https://files.catbox.moe/c50p2m.jpg",
sourceUrl: " 'https://whatsapp.com/channel/0029VbBOqfT5q08ULqdpok3Z",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true,
},
      },
  }, { quoted: m })

}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler

function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60)
    let minutes = Math.floor((ms / (1000 * 60)) % 60)
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
    return `${hours}h ${minutes}m ${seconds}s`
    }
