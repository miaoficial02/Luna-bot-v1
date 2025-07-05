let handler = async (m, { conn, args }) => {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let user = global.db.data.users[userId]
    let name = conn.getName(userId)
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length
    let botname = global.botname || conn.user.name

    let txt = `
Hola! Estrellitas Soy *${botname}*☆
꒷︶꒷꒥꒷‧₊˚꒷︶꒷꒥꒷‧₊˚꒷︶꒷꒥꒷‧₊˚꒷︶꒷꒥꒷‧₊˚
『★•ᥲ𝗊ᥙі 𝗍іᥱᥒᥱs mі ᥣіs𝗍ᥲ ძᥱ ᥴ᥆mᥲᥒძ᥆s•★』
╭── ── ──𓆩۟♱𝅮۟𓆪─── ── ──
┋ᰔ Cliente » @${userId.split('@')[0]}
┋❀ Modo » Publico
┋✦ Bot » ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥' : 'Sub Bot 🅑')}
┋ⴵ Activada » ${uptime}
┋✰ Usuarios » ${totalreg}
┋✧ Comandos » ${totalCommands}
┋🜸 Baileys » Multi Device
╰─ ── ───𓆩۟♱𝅮۟𓆪─── ── ──

       𝐌𝐄𝐍𝐔́ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓


*❀⃞̶ׂ֟፝͞🌕 ╌֟፝╼ #help ✦ #menu*
> ✧ Ver la lista de comandos de la Bot. 
*❀⃞̶ׂ֟፝͞🌕 ╌֟፝╼  #uptime ✦ #runtime*
> ✧ Ver tiempo activo o en línea de la Bot. 
*❀⃞̶ׂ֟፝͞🌕 ╌֟፝╼  #sc ✦ #script*
> ✧ Link del repositorio oficial de la Bot. 
*❀⃞̶ׂ֟፝͞🌕 ╌֟፝╼  #staff ✦ #colaboradores*
> ✧ Ver lista de desarrolladores de la Bot. 
*❀⃞̶ׂ֟፝͞🌕 ╌֟፝╼  #serbot ✦ #serbot code*
> ✧  Crea una sesión de Sub-Bot
*❀⃞̶ׂ֟፝͞🌕 ╌֟፝╼  #bots ✦ #sockets*
> ✧ Ver lista de Sub-Bots activos. 
*❀⃞̶ׂ֟፝͞🌕 ╌֟፝╼  #creador*
> ✧ Contacto del Creador de la Bot.
*❀⃞̶ׂ֟፝͞🌕 ╌֟፝╼  #status ✦ #estado*
> ✧ Ver el Estado actual de la Bot. 
*❀⃞̶ׂ֟፝͞🌕 ╌֟፝╼  #links ✦ #grupos*
> ✧ Ver los enlaces oficiales de la Bot. 
*❀⃞̶ׂ֟፝͞🌕 ╌֟፝╼  #infobot*
> ✧ Ver la información completa se la Bot. 
*❀⃞̶ׂ֟፝͞🌕 ╌֟፝╼  #sug ✦ #newcommand*
> ✧ Sugiere un nuevo comando. 
*❀⃞̶ׂ֟፝͞🌕 ╌֟፝╼  #p ✦ #ping*
> ✧ Ver la velocidad de respuesta de la Bot
*❀⃞̶ׂ֟፝͞🌕 ╌֟፝╼  #reporte ✦ #reportar*
> ✧ Reportar algún fallo o problema de la Bot. 
*❀⃞̶ׂ֟፝͞🌕 ╌֟፝╼  #sistema ✦ #system*
> ✧ Ver Estado del sistema de Alojamiento. 
*❀⃞̶ׂ֟፝͞🌕 ╌֟፝╼  #speed #speedtest*
> ✧ Ver las estadísticas de velocidad de la Bot. 
*❀⃞̶ׂ֟፝͞🌕 ╌֟፝╼  #views ✦ #usuarios*
> ✧ Ver cantidad de usuarios registrados en el sistema. 
*❀⃞̶ׂ֟፝͞🌕 ╌֟፝╼  #funciones ✦ #totalfunciones*
> ✧ Ver todas las funciónes de la Bot. 
*❀⃞̶ׂ֟፝͞🌕 ╌֟፝╼ #ds ✦ #fixmsgespera*
> ✧  Eliminar archivos de sesión innecesarios
*❀⃞̶ׂ֟፝͞🌕 ╌֟፝╼  #editautorespoder*
> ✧ configura un Prompt personalizado de la Bot.
`.trim()

    await conn.sendMessage(m.chat, { text: txt }, { quoted: m })
}

handler.command = ['menuinfo']
export default handler

function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60)
    let minutes = Math.floor((ms / (1000 * 60)) % 60)
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
    return `${hours}h ${minutes}m ${seconds}s`
      }
