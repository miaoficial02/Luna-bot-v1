let handler = async (m, { conn, text, isOwner }) => {
  if (!isOwner) return m.reply('❌ Solo el owner puede usar este comando.')
  if (!text) return m.reply('📢 Escribe el mensaje para el broadcast.')

  let chats = Object.keys(conn.chats).filter(c => c.endsWith('@g.us') || c.endsWith('@s.whatsapp.net'))
  m.reply(`📨 Enviando broadcast a *${chats.length}* chats...`)

  for (let id of chats) {
    await conn.sendMessage(id, {
      text: `🌙 *La owner de Luna-Bot te avisa que:*\n\n${text}`,
    })
    await new Promise(res => setTimeout(res, 1000)) // espera 1s entre envíos
  }

  m.reply('✅ Broadcast enviado correctamente.')
}
handler.command = /^broadcast|bc$/i
handler.owner = true
export default handler
