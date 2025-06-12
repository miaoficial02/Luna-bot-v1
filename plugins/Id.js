let handler = async (m, { isGroup }) => {
  if (isGroup) {
    // Si es grupo, muestra el ID del grupo
    m.reply(`El ID de este grupo es:\n${m.chat}`)
  } else {
    // Si es privado, muestra el ID del usuario
    m.reply(`Tu ID es:\n${m.sender}`)
  }
}

handler.help = ['id']
handler.tags = ['info']
handler.command = ['id']

export default handler
