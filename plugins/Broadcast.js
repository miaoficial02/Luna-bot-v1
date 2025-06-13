let handler = async (m, { conn, text, isOwner }) => {
  if (!isOwner) return m.reply('❌ Solo el *owner* puede usar este comando.')
  if (!text) return m.reply('📝 Escribe el mensaje para el broadcast.\n\nEjemplo:\n#broadcast Luna-Bot se actualizará esta noche.')

  const chats = Object.keys(conn.chats).filter(chatId => chatId.endsWith('@s.whatsapp.net') || chatId.endsWith('@g.us'))

  // Imagen cargada desde Catbox
  const imgURL = 'https://files.catbox.moe/c50p2m.jpg'

  m.reply(`📣 Enviando broadcast a *${chats.length}* chats...`)

  for (let id of chats) {
    await conn.sendMessage(id, {
      image: { url: imgURL },
      caption: `🌙 *La owner de Luna-Bot te avisa que:*\n\n${text}`,
      mentions: [m.sender],
    })
    await new Promise(resolve => setTimeout
