import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {

let grupos = `*Hola!, te invito a unirte a los grupos oficiales del Bot para convivir con la comunidad.....*

*⏤͟͟͟͟͞͞͞͞𝐿𝑈𝑁𝐴-𝐵𝑂𝑇 𝐺𝑅𝑈𝑃𝑂 𝑂𝐹𝐼𝐶𝐼𝐴𝐿*
> *♡* ${gp1}

*⏤͟͟͟͟͞͞͞͞𝐿𝑈𝑁𝐴-𝐵𝑂𝑇 𝐺𝑅𝑈𝑃𝑂 𝑂𝐹𝐼𝐶𝐼𝐴𝐿 𝑆𝑈𝐵-𝐵𝑂𝑇*
> *♡* ${comunidad1}

*ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ*

⚘ Enlace anulado? entre aquí! 

*⏤͟͟͟͟͞͞͞͞𝐿𝑈𝑁𝐴-𝐵𝑂𝑇 𝐶𝐴𝑁𝐴𝐿 𝑂𝐹𝐼𝐶𝐼𝐴𝐿*
> *♡* ${channel}

> ${dev}`

await conn.sendFile(m.chat, catalogo, "grupos.jpg", grupos, m)

await m.react(emojis)

}
handler.help = ['grupos']
handler.tags = ['info']
handler.command = ['grupos', 'links', 'groups']

export default handler
