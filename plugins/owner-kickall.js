let handler = async (m, { conn, participants, isBotAdmin, isOwner }) => {
  if (!m.isGroup) return m.reply('❌ Este comando solo funciona en grupos.')
  if (!isBotAdmin) return m.reply('⚠️ El bot necesita ser administrador.')
  if (!isOwner) return m.reply('❌ Solo el *owner del bot* puede usar este comando.')

  let kickList = participants.filter(p => !p.admin).map(p => p.id).filter(id => id !== conn.user.jid)

  if (kickList.length === 0) return m.reply('✅ No hay usuarios que expulsar.')

  m.reply(`⚠️ Vas a expulsar a *${kickList.length}* miembros.  
Escribe *confirmar* en los próximos 15 segundos para proceder.`)

  const confirm = await conn.awaitReply(m.chat, m.sender, 15000)

  if (confirm.text.toLowerCase() === 'confirmar') {
    for (let user of kickList) {
      await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
      await new Promise(res => setTimeout(res, 1000)) // Espera 1s por usuario
    }
    m.reply('✅ Todos los miembros fueron expulsados.')
  } else {
    m.reply('❌ Cancelado.')
  }
}
handler.command = /^kickall$/i
handler.owner = true
export default handler
