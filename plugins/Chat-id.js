let handler = async (m, { conn, isOwner }) => {
  if (!isOwner) return m.reply('❌ Solo Mía puede usar este comando.');

  // Obtener lista de chats activos
  const chats = Object.keys(conn.chats).filter(id => !id.endsWith('@broadcast'))

  let texto = `🌙 *Luna Bot - Chats Activos*\n\nTotal: ${chats.length} chats\n\n`

  chats.forEach((chatId, i) => {
    texto += `📌 ${i + 1}. ID: ${chatId}\n`
  })

  m.reply(texto)
}
handler.command = /^luna$/i
handler.owner = true
export default handler
