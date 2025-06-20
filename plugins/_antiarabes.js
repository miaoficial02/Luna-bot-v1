export async function before(m, { conn, isOwner }) {
  if (!global.antiArabe) return;
  const arabicRegex = /[\u0600-\u06FF]/;

  if (arabicRegex.test(m.pushName)) {
    if (!isOwner) {
      await conn.sendMessage(m.chat, { text: '🚫 Nombre en árabe detectado. Usuario bloqueado.' }, { quoted: m });
      await conn.updateBlockStatus(m.sender, 'block');
      return !0;
    }
  }
}
