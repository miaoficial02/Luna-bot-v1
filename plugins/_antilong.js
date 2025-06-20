export async function before(m, { conn, isOwner }) {
  if (!global.antiLong) return;
  if (m?.text?.length > 3000 && m.text.length <= 4000) {
    if (!isOwner) {
      await conn.sendMessage(m.chat, { text: '🧹 Texto muy largo eliminado.' }, { quoted: m });
      await conn.sendMessage(m.chat, { delete: m.key });
      return !0;
    }
  }
}
