const handler = async (m, { conn, isBotAdmin }) => {
  if (!isBotAdmin) return m.reply('Necesito ser admin.')

  try {
    await conn.groupSettingUpdate(m.chat, 'not_announcement')
    await conn.sendMessage(m.chat, {
      react: { text: '✅', key: m.key }
    })
  } catch (e) {
    await conn.sendMessage(m.chat, {
      react: { text: '❌', key: m.key }
    })
  }
}

handler.help = ['open']
handler.tags = ['grupo']
