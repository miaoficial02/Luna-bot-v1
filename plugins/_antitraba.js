export async function before(m, { conn, isOwner }) {
  if (!global.antiTraba) return;
  if (m?.text?.length > 4000) {
    if (!isOwner) {
      await conn.sendMessage(m.chat, { text: '⚠️ Mensaje traba detectado. Usuario bloqueado.' }, { quoted: m });
      await conn.updateBlockStatus(m.sender, 'block');
      return !0;
    }
  }
}
