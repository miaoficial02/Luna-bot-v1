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
『★•ᥲ𝗊ᥙі 𝗍іᥱᥒᥱs mі ᥣіs𝗍ᥲ ძᥱ ᥴ᥆mᥲᥒძ᥆s•★』
╭⋆｡:ﾟ･*☽:ﾟ･⋆｡✰⋆｡:ﾟ･*☽:ﾟ･⋆｡✰⋆｡:ﾟ･*☽･*☽
┋ᰔ Cliente » @${userId.split('@')[0]}
┋❀ Modo » Publico
┋✦ Bot » ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥' : 'Prem Bot 🅑')}
┋ⴵ Activada » ${uptime}
┋✰ Usuarios » ${totalreg}
┋✧ Comandos » ${totalCommands}
┋🜸 Baileys » Multi Device
╰⋆｡:ﾟ･*☽:ﾟ･⋆｡✰⋆｡:ﾟ･*☽:ﾟ･⋆｡✰⋆｡:ﾟ･｡:ﾟﾟ･
⌬ Crea un Sub-Bot utilizando tu número con *#qr* o *#code*

⏝゚᮫⃯࣯︶〭ᩙᰰ᮫ ֵ┄᮫ׁ⡾᮫ּ۫︶᮫᜔๋๋ٜ֔ٞ፝⌒ۛᜒᦊ᮫᳝۫🧸̫҇ᰰ᮫ᦡۛᜒ⌒᮫ٜٞ֔፝ᜒ︶᮫᜔۫⡾᮫ ᮫ֵׁ ᮫̟۫⏝゚᮫⃯࣯︶〭ᩙᰰᰰ
              *𝐼𝑁𝐹𝑂𝑅𝑀𝐴𝐶𝐼𝑂́𝑁 𝐷𝐸  𝐿𝐴 𝐵𝑂𝑇*
⢎᮫⋱᜔ׄ⏜ּ໋〫݁᷼︵᮫᪲𓈓۪݀ᰯ⁘ׄ⏜꫶ּ〪〫͜͡︵ׄ𑁀ᩖ🩹᮫๋ໍᩖ𑁀︵ּ͜͡⏜꫶〪〫ׄ⁘۪ᰯ𓈓݀︵ּ᪲݁᷼⏜໋〫ׄ⋰᮫᜔⡱ 
ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ
*✧ 𝐶𝑜𝑚𝑎𝑛𝑑𝑜𝑠 𝑝𝑎𝑟𝑎 𝑣𝑒𝑟 𝑙𝑎 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜́𝑛 𝑑𝑒 𝑙𝑎 𝑏𝑜𝑡.*
ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #help ✦ #menu*
> ✧ Ver la lista de comandos de la Bot. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #uptime ✦ #runtime*
> ✧ Ver tiempo activo o en línea de la Bot. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #sc ✦ #script*
> ✧ Link del repositorio oficial de la Bot. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #staff ✦ #colaboradores*
> ✧ Ver lista de desarrolladores de la Bot. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #serbot ✦ #serbot code*
> ✧  Crea una sesión de Sub-Bot
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #bots ✦ #sockets*
> ✧ Ver lista de Sub-Bots activos. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #creador*
> ✧ Contacto del Creador de la Bot.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #status ✦ #estado*
> ✧ Ver el Estado actual de la Bot. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #links ✦ #grupos*
> ✧ Ver los enlaces oficiales de la Bot. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #infobot*
> ✧ Ver la información completa se la Bot. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #sug ✦ #newcommand*
> ✧ Sugiere un nuevo comando. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #p ✦ #ping*
> ✧ Ver la velocidad de respuesta de la Bot
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #reporte ✦ #reportar*
> ✧ Reportar algún fallo o problema de la Bot. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #sistema ✦ #system*
> ✧ Ver Estado del sistema de Alojamiento. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #speed #speedtest*
> ✧ Ver las estadísticas de velocidad de la Bot. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #views ✦ #usuarios*
> ✧ Ver cantidad de usuarios registrados en el sistema. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #funciones ✦ #totalfunciones*
> ✧ Ver todas las funciónes de la Bot. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #ds ✦ #fixmsgespera*
> ✧  Eliminar archivos de sesión innecesarios
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #editautorespoder*
> ✧ configura un Prompt personalizado de la Bot.
⌢꫶໋⏝ꨪᰰᰰ꫶᜔〪︶፝֟ᮬ᮫᳘⏝꫶ּ〪۪〫𝆬⋱ํ⋯໋⋰᜔ໍ⏝᜔𝆬⋱ํ⋯໋⋰ּ۪ໍ⏝᳘〫֟፝ᮬ〪︶ꨪᰰᰰ᜔꫶⏝〪⌢꫶໋

 ᩘ࣭⏝゚᮫⃯࣯︶〭ᩙᰰ᮫ ᮫ׁ⡾᮫ּ۫︶᮫᜔๋๋ٜ֔ٞ፝⌒ۛᜒᦊ᮫᳝۫🧸̫҇ᰰ᮫ᦡۛᜒ⌒᮫ٜٞ֔፝ᜒ︶᮫᜔۫⡾᮫ ┄᮫݃ ᮫̟۫⏝゚᮫⃯࣯︶〭ᩙᰰᰰ᮫
                  *𝐵𝑈𝑆𝐶𝐴𝐷𝑂𝑅𝐸𝑆*
 ⢎᮫⋱᜔ׄ⏜ּ໋〫݁᷼︵᮫᪲𓈓۪݀ᰯ⁘ׄ⏜꫶ּ〪〫͜͡︵ׄ𑁀ᩖ🩹᮫๋ໍᩖ𑁀︵ּ͜͡⏜꫶〪〫ׄ⁘۪ᰯ𓈓݀︵ּ᪲݁᷼⏜໋〫ׄ⋰᮫᜔⡱ 
ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ
*✧  𝐶𝑜𝑚𝑎𝑛𝑑𝑜𝑠 𝑝𝑎𝑟𝑎 𝑟𝑒𝑎𝑙𝑖𝑧𝑎𝑟 𝑏𝑢́𝑠𝑞𝑢𝑒𝑑𝑎𝑠 𝑒𝑛 𝑑𝑖𝑠𝑡𝑖𝑛𝑡𝑎𝑠 𝑝𝑙𝑎𝑡𝑎𝑓𝑜𝑟𝑚𝑎𝑠.*
ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #tiktoks ✦ #tiktoksearch*
> ✧ Buscador de videos de tiktok. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #tweetposts*
> ✧ Buscador de posts en Twitter/X.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #ytsearch ✦ #yts*
> ✧ Realiza búsquedas de youtube. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #githubsearch*
> ✧ Buscador de usuarios de GitHub. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #cuevana ✦ #cuevanasearch*
> ✧ buscador de películas/series por cuevana. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #google*
> ✧ Realiza búsquedas por Google. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #pin ✦ #pinterest*
> ✧ Buscador de imágenes  de pinteres. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #imagen ✦ #image*
> ✧ Buscador de imagen de Google. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #hentaisearch ✦ #searchhentai*
> ✧ Buscador de capitulos hentai. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #xnxxsearch ✦ #xnxxs*
> ✧ Buscador de videos de Xnxx. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #xvsearch ✦ #xvideossearch*
> ✧ Buscador de videos de xvideos. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #pornhubsearch ✦ #phsearch*
> ✧ Buscador de videos de Pornhub
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #npmjs*
> ✧ Buscador de npmjs.
 ⌢꫶໋⏝ꨪᰰᰰ꫶᜔〪︶፝֟ᮬ᮫᳘⏝꫶ּ〪۪〫𝆬⋱ํ⋯໋⋰᜔ໍ⏝᜔𝆬⋱ํ⋯໋⋰ּ۪ໍ⏝᳘〫֟፝ᮬ〪︶ꨪᰰᰰ᜔꫶⏝〪⌢꫶໋

  ᩘ࣭⏝゚᮫⃯࣯︶〭ᩙᰰ᮫ ֵ̟⡾᮫ּ۫︶᮫᜔๋๋ٜ֔ٞ፝⌒ۛᜒᦊ᮫᳝۫🧸̫҇ᰰ᮫ᦡۛᜒ⌒᮫ٜٞ֔፝ᜒ︶᮫᜔۫⡾᮫ ᮫ֵ̟۫⏝゚᮫⃯࣯︶〭ᩙᰰᰰ᮫
                   *𝐷𝐸𝑆𝐶𝐴𝑅𝐺𝐴𝑆*
⢎᮫⋱᜔ׄ⏜ּ໋〫݁᷼︵᮫᪲𓈓۪݀ᰯ⁘ׄ⏜꫶ּ〪〫͜͡︵ׄ𑁀ᩖ🩹᮫๋ໍᩖ𑁀︵ּ͜͡⏜꫶〪〫ׄ⁘۪ᰯ𓈓݀︵ּ᪲݁᷼⏜໋〫ׄ⋰᮫᜔⡱ 
ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ
*✧ 𝐶𝑜𝑚𝑎𝑛𝑑𝑜𝑠 𝑑𝑒 𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑠 𝑝𝑎𝑟𝑎 𝑣𝑎𝑟𝑖𝑜𝑠 𝑎𝑟𝑐ℎ𝑖𝑣𝑜𝑠.*
ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #tiktok ✦ #tt*
> ✧ Descarga videos de Tiktok. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #mediafire ✦ #mf*
> ✧ Descarga un archivo de Mediafire. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #pinvid ✦ #pinvideo* + [enlace]
> ✧ Descarga un vídeo de pinterest. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #mega ✦ #mg*+ [enlace]
> ✧ Descarga un archivo de MEGA. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #play ✦ #play2*
> ✧ Descarga música/vídeo de Youtube. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #ytmp3  ✦ #ytmp4*
> ✧ Descarga música/vídeo de Youtube mediante URL. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #fb  ✦ #facebook*
> ✧ Descarga vídeo de facebook. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #twitter ✦ #x*+ [enlace]
> ✧Descarga vídeo de Twitter/X.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #ig ✦ #instagram*
> ✧ Descarga contenido de Instagram. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #tts ✦ #tiktoks*+ [busqueda]
> ✧ Buscar vídeo de Tiktok. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #terabox ✦ #tb* + [enlace]
> ✧ Descarga archivos por terabox. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #ttimg ✦ #ttmp3* + [URL]
> ✧ Descarga fotos/sonidos de Tiktok. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #gitclone* + [URL]
> ✧ Descarga un repositorio de GitHub. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #xvideosdl*
> ✧ Descarga videos de  Xvideos. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #xnxxdl*
> ✧ Descarga videos de Xnxx. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #apk ✦ #modapk*
> ✧ Descarga un apk de Aptoide. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #tiktokrandom ✦ #ttrandom*
> ✧ Descarga un vídeo aleatorio de  TiktoK. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #npmdl ✦ #npmdownloader*
> ✧ Descarga paquetes de NPMjs.
  ⌢꫶໋⏝ꨪᰰᰰ꫶᜔〪︶፝֟ᮬ᮫᳘⏝꫶ּ〪۪〫𝆬⋱ํ⋯໋⋰᜔ໍ⏝᜔𝆬⋱ํ⋯໋⋰ּ۪ໍ⏝᳘〫֟፝ᮬ〪︶ꨪᰰᰰ᜔꫶⏝〪⌢꫶໋

 ᩘ࣭⏝゚᮫⃯࣯︶〭ᩙᰰ᮫ ֵ۫⡾᮫ּ۫︶᮫᜔๋๋ٜ֔ٞ፝⌒ۛᜒᦊ᮫᳝۫🧸̫҇ᰰ᮫ᦡۛᜒ⌒᮫ٜٞ֔፝ᜒ︶᮫᜔۫⡾᮫ ᮫ׁ᷼ ᮫̟۫⏝゚᮫⃯࣯︶〭ᩙᰰᰰ᮫
                  *𝐸𝐶𝑂𝑁𝑂𝑀𝐼́𝐴*
⢎᮫⋱᜔ׄ⏜ּ໋〫݁᷼︵᮫᪲𓈓۪݀ᰯ⁘ׄ⏜꫶ּ〪〫͜͡︵ׄ𑁀ᩖ🩹᮫๋ໍᩖ𑁀︵ּ͜͡⏜꫶〪〫ׄ⁘۪ᰯ𓈓݀︵ּ᪲݁᷼⏜໋〫ׄ⋰᮫᜔⡱ 
ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ
*⌬ 𝐶𝑜𝑚𝑎𝑛𝑑𝑜𝑠 𝑑𝑒 𝐸𝑐𝑜𝑛𝑜𝑚𝑖́𝑎 𝑦 𝑅𝑔𝑝 𝑝𝑎𝑟𝑎 𝑔𝑎𝑛𝑎𝑟 𝑑𝑖𝑛𝑒𝑟𝑜 𝑦 𝑜𝑡𝑟𝑜𝑠 𝑟𝑒𝑐𝑢𝑒𝑟𝑠𝑜𝑠.*
ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #w ✦ #work ✦ #trabajar* 
> ✧ Trabaja para ganar ${moneda}.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #slut ✦ #prostituirse*
> ✧ Trabaja como prostituta y gana ${moneda}.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #cf ✦ #suerte*
> ✧ Apuesta tus ${moneda}. a cargo o cruz.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #crime ✦ #crimen*
> ✧ Trabaja como ladrón para ganar ${moneda}.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #ruleta ✦ #roulette ✦ #rt*
> ✧ apuesta ${moneda} al color rojo o negro. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #casino ✦ #apostar*
> ✧ Apuesta tus  ${moneda} en el casino. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #slot*
> ✧ Apuesta tus ${moneda} en la ruleta y prueba tu suerte. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #cartera ✦ #wallet*
> ✧ Ver tus ${moneda} en tu cartera. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #banco ✦ #bank*
> ✧ ver tus ${moneda} en el banco. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #deposit ✦ #depositar ✦ #d*
> ✧ Deposita tus ${moneda} en el Banco. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #retirar ✦ #with ✦ #withdraw*
> ✧ Retira tus ${moneda} del Banco. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #transfer ✦ #pay*
> ✧ transfiere ${moneda} o XP a otros usuarios. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #miming ✦ #minar ✦ #mine*
> ✧ Trabaja como minero y recolecta recursos. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #buyall ✦ #buy*
> ✧ Compra ${moneda} con tu XP. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #daily ✦ #diario*
> ✧ Reclama tu recompensa diaria. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #cofre*
> ✧ Reclama un cofre diario lleno de recursos. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #weekly ✦ #semanal*
> ✧ Reclama tu regalo semanal. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #monthly #mensual*
> ✧ Reclama tu recompensa mensual.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #steal ✦ #robar ✦ #rob*
> ✧ intenta robarle ${moneda} a alguien. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #robarxp ✦ #robxp*
> ✧  Intenta robar XP a un usuario. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #eboard ✦ #baltop*
> ✧ Ver el ranking de usuarios con más ${moneda}.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #aventura ✦ #adventure*
> ✧ aventura te en un nuevo reino y  recolecta recursos. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #curar ✦ #heal*
> ✧  Cura tu salud para volverte aventurar. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #cazar ✦ #hunt ✦ #berburu*
> ✧ Aventurate en una caza de animales. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #inv ✦ #inventario*
> ✧ Ver tu inventario con todos tus ítems. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #mazmorra ✦ #explorar*
> ✧ Explorar mazmorra para ganar ${moneda}.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #halloween*
> ✧ Reclama tu dulce o truco (sólo en halloween) 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #christmas ✦ #navidad*
> ✧ Reclama tu regalo navideño (sólo en Navidad) 
  ⌢꫶໋⏝ꨪᰰᰰ꫶᜔〪︶፝֟ᮬ᮫᳘⏝꫶ּ〪۪〫𝆬⋱ํ⋯໋⋰᜔ໍ⏝᜔𝆬⋱ํ⋯໋⋰ּ۪ໍ⏝᳘〫֟፝ᮬ〪︶ꨪᰰᰰ᜔꫶⏝〪⌢꫶໋

 ᩘ࣭⏝゚᮫⃯࣯︶〭ᩙᰰ᮫᮫ׁ⡾᮫ּ۫︶᮫᜔๋๋ٜ֔ٞ፝⌒ۛᜒᦊ᮫᳝۫🧸̫҇ᰰ᮫ᦡۛᜒ⌒᮫ٜٞ֔፝ᜒ︶᮫᜔۫⡾᮫  ᰰ᮫᮫᮫ׁ̟۫⏝゚᮫⃯࣯︶〭ᩙᰰᰰ
                    *𝐺𝐴𝐶𝐻𝐴*
⢎᮫⋱᜔ׄ⏜ּ໋〫݁᷼︵᮫᪲𓈓۪݀ᰯ⁘ׄ⏜꫶ּ〪〫͜͡︵ׄ𑁀ᩖ🩹᮫๋ໍᩖ𑁀︵ּ͜͡⏜꫶〪〫ׄ⁘۪ᰯ𓈓݀︵ּ᪲݁᷼⏜໋〫ׄ⋰᮫᜔⡱ 
ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ
*⌬ 𝐶𝑜𝑚𝑎𝑛𝑑𝑜 𝑑𝑒 𝑔𝑎𝑐ℎ𝑎 𝑝𝑎𝑟𝑎 𝑟𝑒𝑐𝑙𝑎𝑚𝑎𝑟 𝑦 𝑐𝑜𝑙𝑒𝑐𝑐𝑖𝑜𝑛𝑎𝑟 𝑝𝑒𝑟𝑠𝑜𝑛𝑎𝑗𝑒𝑠.*
ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #rollwaifu ✦ #rw ✦ #roll*
> ✧ Waifu o husbando aleatorio. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #claim ✦ #c ✦ #reclamar*
> ✧ Reclamar un personaje. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #harem ✦ #waifus ✦ #claims*
> ✧ Ver tus personajes reclamados. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #charimage ✦ #waifuimage ✦ #wimage*
> ✧ Ver una imagen aleatoria de un personaje. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #charinfo ✦ #winfo ✦ #waifuinfo*
> ✧ ver la información de un personaje. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #givechar ✦ #givewaifu ✦ #regalar*
> ✧  Regala un personaje a otro usuarios
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #vote ✦ #votar*
> ✧ Votar por un personaje para subir su valor. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #waifusboard ✦ #waifustop ✦ #topwaifus*
> ✧ Ver el top de personajes con mayor valor. 
  ⌢꫶໋⏝ꨪᰰᰰ꫶᜔〪︶፝֟ᮬ᮫᳘⏝꫶ּ〪۪〫𝆬⋱ํ⋯໋⋰᜔ໍ⏝᜔𝆬⋱ํ⋯໋⋰ּ۪ໍ⏝᳘〫֟፝ᮬ〪︶ꨪᰰᰰ᜔꫶⏝〪⌢꫶໋

 ᩘ࣭⏝゚᮫⃯࣯︶〭ᩙᰰ᮫ ֵ⡾᮫ּ۫︶᮫᜔๋๋ٜ֔ٞ፝⌒ۛᜒᦊ᮫᳝۫🧸̫҇ᰰ᮫ᦡۛᜒ⌒᮫ٜٞ֔፝ᜒ︶᮫᜔۫⡾᮫ ᮫ֵ۫ ᮫̟۫⏝゚᮫⃯࣯︶〭ᩙᰰᰰ᮫
                   *𝑆𝑇𝐼𝐶𝐾𝐸𝑅𝑆*
⢎᮫⋱᜔ׄ⏜ּ໋〫݁᷼︵᮫᪲𓈓۪݀ᰯ⁘ׄ⏜꫶ּ〪〫͜͡︵ׄ𑁀ᩖ🩹᮫๋ໍᩖ𑁀︵ּ͜͡⏜꫶〪〫ׄ⁘۪ᰯ𓈓݀︵ּ᪲݁᷼⏜໋〫ׄ⋰᮫᜔⡱ 
ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ
*⌬ 𝐶𝑜𝑚𝑎𝑛𝑑𝑜𝑠 𝑝𝑎𝑟𝑎 𝑐𝑟𝑒𝑎𝑐𝑖𝑜𝑛𝑒𝑠 𝑑𝑒 𝑠𝑡𝑖𝑐𝑘𝑒𝑟𝑠, 𝑒𝑡𝑐.*
ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #sticker ✦ #s*
> ✧ Crea stickers de (imagen/vídeo) 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #setmeta*
> ✧ establece un pack y autor para los stickers. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #delmeta*
> ✧ Elimina tu pack de stickers. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #pfp ✦ #getpic*
> ✧ obten la foto de perfil de un usuario
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #qc*
> ✧  crea un stickers con texto de un usuario.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #toimg ✦ #img*
> ✧ Convierte stickers en imagen. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #brat ✦ #ttp ✦ #attp*
> ✧ crea stickers con texto. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #emojimix*
> ✧ funciona 2 emojis para crear un sticker. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #wm*
> ✧ Cambia nombre de los stickers
⌢꫶໋⏝ꨪᰰᰰ꫶᜔〪︶፝֟ᮬ᮫᳘⏝꫶ּ〪۪〫𝆬⋱ํ⋯໋⋰᜔ໍ⏝᜔𝆬⋱ํ⋯໋⋰ּ۪ໍ⏝᳘〫֟፝ᮬ〪︶ꨪᰰᰰ᜔꫶⏝〪⌢꫶໋

 ᩘ࣭⏝゚᮫⃯࣯︶〭ᩙᰰ᮫ ֵ⡾᮫ּ۫︶᮫᜔๋๋ٜ֔ٞ፝⌒ۛᜒᦊ᮫᳝۫🧸̫҇ᰰ᮫ᦡۛᜒ⌒᮫ٜٞ֔፝ᜒ︶᮫᜔۫⡾᮫ ֵ۫ ᮫̟۫⏝゚᮫⃯࣯︶〭ᩙᰰᰰ᮫
                *𝐻𝐸𝑅𝑅𝐴𝑀𝐼𝐸𝑁𝑇𝐴𝑆*
⢎᮫⋱᜔ׄ⏜ּ໋〫݁᷼︵᮫᪲𓈓۪݀ᰯ⁘ׄ⏜꫶ּ〪〫͜͡︵ׄ𑁀ᩖ🩹᮫๋ໍᩖ𑁀︵ּ͜͡⏜꫶〪〫ׄ⁘۪ᰯ𓈓݀︵ּ᪲݁᷼⏜໋〫ׄ⋰᮫᜔⡱ 
ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ
*⌬  𝐶𝑜𝑚𝑎𝑛𝑑𝑜𝑠  𝑑𝑒 ℎ𝑒𝑟𝑟𝑎𝑚𝑖𝑒𝑛𝑡𝑎𝑠 𝑐𝑜𝑛 𝑚𝑢𝑐ℎ𝑎𝑠 𝑓𝑢𝑛𝑐𝑖𝑜𝑛𝑒𝑠.*
ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #calcular ✦ #cal*
> ✧ Calcular todo tipo de ecuaciones. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #tiempo ✦ #clima*
> ✧ Ver el clima de un país. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #horario*
> ✧ Ver el horario global de los países. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #fake ✦ #fakereply*
> ✧ Crea un mensaje falso de un usuario. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #enhance ✦ #remini ✦ #hd*
> ✧ Mejora la calidad de una imagen. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #letra*
> ✧ Cambia la fuente de las letras. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #read ✦ #readviewonce*
> ✧ Ver imagen de una sola vista. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #whatmusic ✦ #shazam*
> ✧ Descubre el  nombre de la canción o vídeo. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #ss ✦ #ssweb*
> ✧ Ver el estado de una página web. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #length ✦ #tamaño*
> ✧ Cambia  ttamaño de una imagen. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #say ✦ #decir* + [texto]
> ✧ Repetir un mensaje. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #todoc ✦ #toducument*
> ✧ Crea documento de (audio, imágenes y videos). 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #traslate ✦ #traducir ✦ #trad*
> ✧ traduce palabras en otros idiomas. 
⌢꫶໋⏝ꨪᰰᰰ꫶᜔〪︶፝֟ᮬ᮫᳘⏝꫶ּ〪۪〫𝆬⋱ํ⋯໋⋰᜔ໍ⏝᜔𝆬⋱ํ⋯໋⋰ּ۪ໍ⏝᳘〫֟፝ᮬ〪︶ꨪᰰᰰ᜔꫶⏝〪⌢꫶

 
 ᩘ࣭⏝゚᮫⃯࣯︶〭ᩙᰰ᮫ ֵ۫⡾᮫ּ۫︶᮫᜔๋๋ٜ֔ٞ፝⌒ۛᜒᦊ᮫᳝۫🧸̫҇ᰰ᮫ᦡۛᜒ⌒᮫ٜٞ֔፝ᜒ︶᮫᜔۫⡾᮫ ֵ  ᮫̟۫⏝゚᮫⃯࣯︶〭ᩙᰰᰰ᮫
                     *𝑃𝐸𝑅𝐹𝐼𝐿*
⢎᮫⋱᜔ׄ⏜ּ໋〫݁᷼︵᮫᪲𓈓۪݀ᰯ⁘ׄ⏜꫶ּ〪〫͜͡︵ׄ𑁀ᩖ🩹᮫๋ໍᩖ𑁀︵ּ͜͡⏜꫶〪〫ׄ⁘۪ᰯ𓈓݀︵ּ᪲݁᷼⏜໋〫ׄ⋰᮫᜔⡱ 
ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ
⌬  𝐶𝑜𝑚𝑎𝑛𝑑𝑜𝑠 𝑑𝑒 𝑝𝑒𝑟𝑓𝑖𝑙 𝑝𝑎𝑟𝑎 𝑣𝑒𝑟, 𝑐𝑜𝑛𝑓𝑖𝑔𝑢𝑟𝑎𝑟 𝑦 𝑐𝑜𝑚𝑝𝑟𝑜𝑏𝑎𝑟 𝑒𝑠𝑡𝑎𝑑𝑜 𝑑𝑒 𝑡𝑢 𝑝𝑒𝑟𝑓𝑖𝑙. 
ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #reg ✦ #verificar ✦ #register*
> ✧ Registra tu nombre y edad en la bot. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #unreg*
> ✧ Elimina tu registro de la Bot. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #profile*
> ✧ Muestra tu perfil de usuario. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #marry* +  [mencion / etiquetar]
> ✧ Propon matrimonio a otro usuario. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #divorce*
> ✧ Divorciate de tu pareja. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #setgenre ✦ #setgenero*
> ✧ Establece tu genero en el perfil del bot. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #delgenre ✦ #delgenero*
> ✧ Elimina tu genero del perfil del bot. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #setbirth ✦ #setnacimiento*
> ✧ Establece tu fecha de nacimiento en el perfil del bot.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #delbirth ✦ #delnacimiento*
> ✧ Elimina tu fecha de nacimiento del perfil del bot.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #setdescription ✦ #setdesc*
> ✧ Establece una descripción en tu perfil del bot.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #deldescription ✦ #deldesc*
> ✱ Elimina la descripción de tu perfil del bot.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #lb ✦ #lboard* + <Paginá>
> ✧ Top de usuarios con más (experiencia y nivel).
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #level ✦ #lvl* + <@Mencion>
> ✧ Ver tu nivel y experiencia actual.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #comprarpremium ✦ #premium*
> ✧ Compra un pase premium para usar el bot sin límites.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #confesiones ✦ #confesar*
> ✧ Confiesa tus sentimientos a alguien de manera anonima.
⌢꫶໋⏝ꨪᰰᰰ꫶᜔〪︶፝֟ᮬ᮫᳘⏝꫶ּ〪۪〫𝆬⋱ํ⋯໋⋰᜔ໍ⏝᜔𝆬⋱ํ⋯໋⋰ּ۪ໍ⏝᳘〫֟፝ᮬ〪︶ꨪᰰᰰ᜔꫶⏝〪⌢꫶


 ᩘ࣭⏝゚᮫⃯࣯︶〭ᩙᰰ᮫ ֵ۫⡾᮫ּ۫︶᮫᜔๋๋ٜ֔ٞ፝⌒ۛᜒᦊ᮫᳝۫🧸̫҇ᰰ᮫ᦡۛᜒ⌒᮫ٜٞ֔፝ᜒ︶᮫᜔۫⡾᮫ ֵ ᮫̟۫⏝゚᮫⃯࣯︶〭ᩙᰰᰰ᮫
                    *𝐺𝑅𝑈𝑃𝑂𝑆*
⢎᮫⋱᜔ׄ⏜ּ໋〫݁᷼︵᮫᪲𓈓۪݀ᰯ⁘ׄ⏜꫶ּ〪〫͜͡︵ׄ𑁀ᩖ🩹᮫๋ໍᩖ𑁀︵ּ͜͡⏜꫶〪〫ׄ⁘۪ᰯ𓈓݀︵ּ᪲݁᷼⏜໋〫ׄ⋰᮫᜔⡱
ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ     
*⌬ 𝐶𝑜𝑚𝑎𝑛𝑑𝑜𝑠 𝑠𝑒 𝑔𝑟𝑢𝑝𝑜𝑠 𝑝𝑎𝑟𝑎 𝑢𝑛𝑎 𝑚𝑒𝑗𝑜𝑟 𝑔𝑒𝑠𝑡𝑖𝑜́𝑛 𝑑𝑒 𝑒𝑙𝑙𝑜𝑠.*
ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ
*❀⃞̶🌟 ╌֟፝╼ #hidetag*
> ✧ Envia un mensaje mencionando a todos los usuarios
*❀⃞̶🌟 ╌֟፝╼ #gp ✦ #infogrupo*
> ✧  Ver la Informacion del grupo.
*❀⃞̶🌟 ╌֟፝╼ #linea ✦ #listonline*
> ✧ Ver la lista de los usuarios en linea.
ᰔᩚ *#setwelcome*
> ✧ Establecer un mensaje de bienvenida personalizado.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #setbye*
> ✧ Establecer un mensaje de despedida personalizado.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #link*
> ✧ El bot envia el link del grupo.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ admins ✦ admin*
> ✧ Mencionar a los admins para solicitar ayuda.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #restablecer ✦ #revoke*
> ✧ Restablecer el enlace del grupo.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #open*
> ✧ Cambia ajustes del grupo para que todos los usuarios envien mensaje.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #close*
> ✧ Cambia ajustes del grupo para que solo los administradores envien mensaje.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #kick* [número / mension]
> ✧ Elimina un usuario de un grupo.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #add ✦ #añadir ✦ #agregar* [número]
> ✧ Invita a un usuario a tu grupo.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #promote* [mension / etiquetar]
> ✧ El bot dara administrador al usuario mencionando.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #demote* [mension / etiquetar]
> ✧ El bot quitara administrador al usuario mencionando.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #gpbanner ✦ #groupimg*
> ✧ Cambiar la imagen del grupo.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #gpname ✦ #groupname*
> ✧ Cambiar el nombre del grupo.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #gpdesc ✦ #groupdesc*
> ✧ Cambiar la descripción del grupo.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #advertir ✦ #warn ✦ #warning*
> ✧ Darle una advertencia aún usuario.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #unwarn ✦ #delwarn*
> ✧ Quitar advertencias.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #advlist ✦ #listadv*
> ✧ Ver lista de usuarios advertidos.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #bot on*
> ✧ Enciende el bot en un grupo.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #bot off*
> ✧ Apaga el bot en un grupo.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #mute* [mension / etiquetar]
> ✧ El bot elimina los mensajes del usuario.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #unmute* [mension / etiquetar]
> ✧ El bot deja de eliminar los mensajes del usuario.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #encuesta ✦ #poll*
> ✧ Crea una encuesta.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #delete ✦ #del*
> ✧ Elimina mensaje de otros usuarios.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #fantasmas*
> ✧ Ver lista de inactivos del grupo.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #kickfantasmas*
> ✧ Elimina a los inactivos del grupo.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #invocar ✦ #tagall ✦ #todos*
> ✧ Invoca a todos los usuarios de un grupo.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #setemoji ✦ #setemo*
> ✧ Cambia el emoji que se usa en la invitación de usuarios.
❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #listnum ✦ #kicknum*
> ✧ Elimine a usuario por el prefijo de país.
⌢꫶໋⏝ꨪᰰᰰ꫶᜔〪︶፝֟ᮬ᮫᳘⏝꫶ּ〪۪〫𝆬⋱ํ⋯໋⋰᜔ໍ⏝᜔𝆬⋱ํ⋯໋⋰ּ۪ໍ⏝᳘〫֟፝ᮬ〪︶ꨪᰰᰰ᜔꫶⏝〪⌢꫶  


 ᩘ࣭⏝゚᮫⃯࣯︶〭ᩙᰰ᮫ ᮫ֵׁ⡾᮫ּ۫︶᮫᜔๋๋ٜ֔ٞ፝⌒ۛᜒᦊ᮫᳝۫🧸̫҇ᰰ᮫ᦡۛᜒ⌒᮫ٜٞ֔፝ᜒ︶᮫᜔۫⡾᮫᮫ׁ ᮫̟۫⏝゚᮫⃯࣯︶〭ᩙᰰᰰ᮫
                    *𝐴𝑁𝐼𝑀𝐸𝑆*
⢎᮫⋱᜔ׄ⏜ּ໋〫݁᷼︵᮫᪲𓈓۪݀ᰯ⁘ׄ⏜꫶ּ〪〫͜͡︵ׄ𑁀ᩖ🩹᮫๋ໍᩖ𑁀︵ּ͜͡⏜꫶〪〫ׄ⁘۪ᰯ𓈓݀︵ּ᪲݁᷼⏜໋〫ׄ⋰᮫᜔⡱ 
ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ
⌬ 𝐶𝑜𝑚𝑎𝑛𝑑𝑜𝑠 𝑑𝑒 𝑟𝑒𝑎𝑐𝑐𝑖𝑜́𝑛 𝑑𝑒 𝐴𝑛𝑖𝑚𝑒𝑠. 
ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #angry ✦ #enojado* + <mencion>
> ✧ Estar enojado
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #bite* + <mencion>
> ✧ Muerde a alguien
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #bleh* + <mencion>
> ✧ Sacar la lengua
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #blush* + <mencion>
> ✧ Sonrojarte
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #bored ✦ #aburrido* + <mencion>
> ✧ Estar aburrido
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #cry* + <mencion>
> ✧ Llorar por algo o alguien
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #cuddle* + <mencion>
> ✧ Acurrucarse
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #dance* + <mencion>
> ✧ Sacate los pasitos prohíbidos
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #drunk* + <mencion>
> ✧ Estar borracho
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #eat ✦ #comer* + <mencion>
> ✧ Comer algo delicioso
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #facepalm* + <mencion>
> ✧ Darte una palmada en la cara
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #happy ✦ #feliz* + <mencion>
> ✧ Salta de felicidad
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #hug* + <mencion>
> ✧ Dar un abrazo
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #impregnate ✦ #preg* + <mencion>
> ✧ Embarazar a alguien
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #kill* + <mencion>
> ✧ Toma tu arma y mata a alguien
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #kiss ✦ #besar* ✦ #kiss2 + <mencion>
> ✧ Dar un beso
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #laugh* + <mencion>
> ✧ Reírte de algo o alguien
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #lick* + <mencion>
> ✧ Lamer a alguien
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #love ✦ #amor* + <mencion>
> ✧ Sentirse enamorado
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #pat* + <mencion>
> ✧ Acaricia a alguien
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  #poke* + <mencion>
> ✧ Picar a alguien
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #pout* + <mencion>
> ✧ Hacer pucheros
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #punch* + <mencion>
> ✧ Dar un puñetazo
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #run* + <mencion>
> ✧ Correr
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #sad ✦ #triste* + <mencion>
> ✧ Expresar tristeza
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #scared* + <mencion>
> ✧ Estar asustado
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #seduce* + <mencion>
> ✧ Seducir a alguien
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #shy ✦ #timido* + <mencion>
> ✧ Sentir timidez
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #slap* + <mencion>
> ✧ Dar una bofetada
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #dias ✦ #days*
> ✧ Darle los buenos días a alguien 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #noches ✦ #nights*
> ✧ Darle las buenas noches a alguien 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #sleep* + <mencion>
> ✧ Tumbarte a dormir
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #smoke* + <mencion>
> ✧ Fumar
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #think* + <mencion>
> ✧ Pensar en algo 
⌢꫶໋⏝ꨪᰰᰰ꫶᜔〪︶፝֟ᮬ᮫᳘⏝꫶ּ〪۪〫𝆬⋱ํ⋯໋⋰᜔ໍ⏝᜔𝆬⋱ํ⋯໋⋰ּ۪ໍ⏝᳘〫֟፝ᮬ〪︶ꨪᰰᰰ᜔꫶⏝〪⌢꫶


 ᩘ࣭⏝゚᮫⃯࣯︶〭ᩙᰰ᮫ ֵ⡾᮫ּ۫︶᮫᜔๋๋ٜ֔ٞ፝⌒ۛᜒᦊ᮫᳝۫🧸̫҇ᰰ᮫ᦡۛᜒ⌒᮫ٜٞ֔፝ᜒ︶᮫᜔۫⡾᮫ ֵ  ᮫̟۫⏝゚᮫⃯࣯︶〭ᩙᰰᰰ᮫
                      *𝑁𝑆𝐹𝑊*
⢎᮫⋱᜔ׄ⏜ּ໋〫݁᷼︵᮫᪲𓈓۪݀ᰯ⁘ׄ⏜꫶ּ〪〫͜͡︵ׄ𑁀ᩖ🩹᮫๋ໍᩖ𑁀︵ּ͜͡⏜꫶〪〫ׄ⁘۪ᰯ𓈓݀︵ּ᪲݁᷼⏜໋〫ׄ⋰᮫᜔⡱   
     ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ
 ⌬ 𝐶𝑜𝑚𝑎𝑛𝑑𝑜𝑠 𝑁𝑆𝐹𝑊 (𝑐𝑜𝑛𝑡𝑒𝑛𝑖𝑑𝑜 𝑑𝑒 𝑎𝑑𝑢𝑙𝑡𝑜𝑠) 
 ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #anal* + <mencion>
> ✧ Hacer un anal
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #waifu*
> ✧ Buscá una waifu aleatorio.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #bath* + <mencion>
> ✧ Bañarse
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #blowjob ✦ #mamada ✦ #bj* + <mencion>
> ✧ Dar una mamada
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #boobjob* + <mencion>
> ✧ Hacer una rusa
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #cum* + <mencion>
> ✧ Venirse en alguien.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #fap* + <mencion>
> ✧ Hacerse una paja
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #ppcouple ✦ #ppcp*
> ✧ Genera imagenes para amistades o parejas.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #footjob* + <mencion>
> ✧ Hacer una paja con los pies
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #fuck ✦ #coger ✦ #fuck2* + <mencion>
> ✧ Follarte a alguien
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #cafe ✦ #coffe*
> ✧ Tomate un cafecito con alguien
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #violar ✦ #perra + <mencion>
> ✧ Viola a alguien
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #grabboobs* + <mencion>
> ✧ Agarrrar tetas
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #grop* + <mencion>
> ✧ Manosear a alguien
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #lickpussy* + <mencion>
> ✧ Lamer un coño
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #rule34 ✦ #r34* + [Tags]
> ✧ Buscar imagenes en Rule34
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #sixnine ✦ #69* + <mencion>
> ✧ Haz un 69 con alguien
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #spank ✦ #nalgada* + <mencion>
> ✧ Dar una nalgada
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #suckboobs* + <mencion>
> ✧ Chupar tetas
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #undress ✦ #encuerar* + <mencion>
> ✧ Desnudar a alguien
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #yuri ✦ #tijeras* + <mencion>
> ✧ Hacer tijeras.
⌢꫶໋⏝ꨪᰰᰰ꫶᜔〪︶፝֟ᮬ᮫᳘⏝꫶ּ〪۪〫𝆬⋱ํ⋯໋⋰᜔ໍ⏝᜔𝆬⋱ํ⋯໋⋰ּ۪ໍ⏝᳘〫֟፝ᮬ〪︶ꨪᰰᰰ᜔꫶⏝〪⌢꫶


 ᩘ࣭⏝゚᮫⃯࣯︶〭ᩙᰰ᮫ ᮫ֵׁ⡾᮫ּ۫︶᮫᜔๋๋ٜ֔ٞ፝⌒ۛᜒᦊ᮫᳝۫🧸̫҇ᰰ᮫ᦡۛᜒ⌒᮫ٜٞ֔፝ᜒ︶᮫᜔۫⡾᮫  ᮫̟۫⏝゚᮫⃯࣯︶〭ᩙᰰᰰ᮫
                     *𝐽𝑈𝐸𝐺𝑂𝑆*
⢎᮫⋱᜔ׄ⏜ּ໋〫݁᷼︵᮫᪲𓈓۪݀ᰯ⁘ׄ⏜꫶ּ〪〫͜͡︵ׄ𑁀ᩖ🩹᮫๋ໍᩖ𑁀︵ּ͜͡⏜꫶〪〫ׄ⁘۪ᰯ𓈓݀︵ּ᪲݁᷼⏜໋〫ׄ⋰᮫᜔⡱ 
ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ
⌬ 𝐶𝑜𝑚𝑎𝑛𝑑𝑜𝑠 𝑑𝑒 𝐽𝑢𝑒𝑔𝑜𝑠 𝑜𝑎𝑟𝑎 𝐽𝑢𝑔𝑎𝑟 𝑐𝑜𝑛 𝑡𝑢𝑠 𝑎𝑚𝑖𝑔𝑜𝑠. 
ㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤׄㅤׅㅤㅤׄㅤׅㅤׄㅤ 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #amistad ✦ #amigorandom* 
> ✧ hacer amigos con un juego. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #chaqueta ✦ #jalamela*
> ✧ Hacerte una chaqueta.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #chiste*
> ✧ La bot te cuenta un chiste.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #consejo* 
> ✧ La bot te da un consejo. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #doxeo ✦ #doxear* + <mencion>
> ✧ Simular un doxeo falso.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #facto*
> ✧ La bot te lanza un facto. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #formarpareja*
> ✧ Forma una pareja. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #formarpareja5*
> ✧ Forma 5 parejas diferentes.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #frase*
> ✧ La bot te da una frase.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #huevo*
> ✧ Agarrale el huevo a alguien.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #chupalo* + <mencion>
> ✧ Hacer que un usuario te la chupe.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #aplauso* + <mencion>
> ✧ Aplaudirle a alguien.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #marron* + <mencion>
> ✧ Burlarte del color de piel de un usuario. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #suicidar*
> ✧ Suicidate. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #iq ✦ #iqtest* + <mencion>
> ✧ Calcular el iq de alguna persona. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #meme*
> ✧ La bot te envía un meme aleatorio. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #morse*
> ✧ Convierte un texto a codigo morse. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #nombreninja*
> ✧ Busca un nombre ninja aleatorio. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #paja ✦ #pajeame* 
> ✧ La bot te hace una paja.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #personalidad* + <mencion>
> ✧ La bot busca tu personalidad. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #piropo*
> ✧ Lanza un piropo.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #pregunta*
> ✧ Hazle una pregunta a la bot.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #ship ✦ #pareja*
> ✧ La bot te da la probabilidad de enamorarte de una persona. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #sorteo*
> ✧ Empieza un sorteo. 
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #top*
> ✧ Empieza un top de personas.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #formartrio* + <mencion>
> ✧ Forma un trio.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #ahorcado*
> ✧ Diviertete con la bot jugando el juego ahorcado.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #mates ✦ #matematicas*
> ✧ Responde las preguntas de matemáticas para ganar recompensas.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #ppt*
> ✧ Juega piedra papel o tijeras con la bot.
ᰔᩚ *#sopa ✦ #buscarpalabra*
> ✧ Juega el famoso juego de sopa de letras.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #pvp ✦ #suit* + <mencion>
> ✧ Juega un pvp contra otro usuario.
*❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼ #ttt*
> ✧ Crea una sala de juego.
⌢꫶໋⏝ꨪᰰᰰ꫶᜔〪︶፝֟ᮬ᮫᳘⏝꫶ּ〪۪〫𝆬⋱ํ⋯໋⋰᜔ໍ⏝᜔𝆬⋱ํ⋯໋⋰ּ۪ໍ⏝᳘〫֟፝ᮬ〪︶ꨪᰰᰰ᜔꫶⏝〪⌢꫶`.trim()

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
