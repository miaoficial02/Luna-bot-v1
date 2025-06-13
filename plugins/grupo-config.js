let handler = async (m, { conn, command, isAdmin, isBotAdmin, isGroup }) => {
  if (!isGroup) return m.reply('❌ Este comando solo funciona en grupos.')
  if (!isAdmin) return m.reply('❌ Solo los administradores pueden usar este comando.')
  if (!isBotAdmin) return m.reply('❌ El bot necesita ser administrador para hacer esto.')

  if (command === 'open') {
    await conn.groupSettingUpdate(m.chat, 'not_announcement')
    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
  }

  if (command === 'close') {
    await conn.groupSettingUpdate(m.chat, 'announcement')
    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
  }
}

handler.help = ['open', 'close']
handler.tags = ['group']
handler.command = ['open', 'close']
handler.group = true
handler.botAdmin = true
handler.admin = true

export default handler
