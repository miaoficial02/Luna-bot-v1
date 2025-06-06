let handler = async (m, { conn, args, usedPrefix, command }) => {
  const emoji = '✅'
  const emoji2 = '🔒'
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null)

  let isClose = {
    'open': 'not_announcement',
    'close': 'announcement',
    'abrir': 'not_announcement',
    'cerrar': 'announcement',
  }[(args[0] || '').toLowerCase()]

  if (isClose === undefined) {
    return conn.reply(m.chat, `${emoji} *Elija una opción válida:*\n\n✰ *${usedPrefix + command} abrir*\n✰ *${usedPrefix + command} cerrar*\n✰ *${usedPrefix + command} open*\n✰ *${usedPrefix + command} close*`, m)
  }

  await conn.groupSettingUpdate(m.chat, isClose)

  if (isClose === 'not_announcement') {
    return m.reply(`${emoji} *Ya pueden escribir en este grupo.*`)
  } else {
    return m.reply(`${emoji2} *Solo los administradores pueden escribir en este grupo.*`)
  }
}

handler.help = ['open', 'close']
handler.tags = ['open', 'close']
handler.command = ['open', 'close']
handler.admin = true
handler.botAdmin = true

export default handler
