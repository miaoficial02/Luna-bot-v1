const handler = async (m, { conn, isBotAdmin }) => {
  if (!isBotAdmin) return m.reply('Necesito ser admin.')

  try {
    await conn.groupSettingUpdate(m.chat, 'announcement')
    await conn.sendMessage(m.chat, {
      react: { text: '✅', key: m.key }
    })
  } catch (e) {
    await conn.sendMessage(m.chat, {
      react: { text: '❌', key: m.key }
    })
  }
}

handler.help = ['close']
handler.tags = ['grupo']
handler.command = /^(close|cerrar|cerrargrupo)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
