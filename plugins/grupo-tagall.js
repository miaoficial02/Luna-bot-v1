/* 
- tagall By Angel-OFC  
- etiqueta en un grupo a todos
- https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y
*/
const handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const customEmoji = global.db.data.chats[m.chat]?.customEmoji || '🌕';
  m.react(customEmoji);

  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }

  const pesan = args.join` `;
  const oi = `*⏤͟͟͞͞✰ 𝕀ℕ𝔽𝕆 :* ${pesan}`;
  let teks = `*!  𝕄𝔼ℕℂ𝕀𝕆́ℕ 𝔾𝔼ℕ𝔼ℝ𝔸𝕃 !*\n  *ℙ𝔸ℝ𝔸 ${participants.length} 𝕄𝕀𝔼𝕄𝔹ℝ𝕆𝕊*  ⚠️\n\n ${oi}\n\n╭  ┄ 𝅄 ۪꒰ \`⡞᪲=͟͟͞${botname} ≼᳞ׄ\` ꒱ ۟ 𝅄 ┄\n`;
  for (const mem of participants) {
    teks += `𐔌ּࣱ໋᳝࣪${customEmoji} ᤢׅ࣫〬ᦡ̥ ᮫ׅ݅𑀝᮫ׅ̟۠݅ᡴּ໋࣪ @${mem.id.split('@')[0]}\n`;
  }
  teks += `╰⸼ ┄ ┄ ┄ ─  ꒰  ׅ୭ *${vs}* ୧ ׅ ꒱  ┄  ─ ┄ ⸼`;

  conn.sendMessage(m.chat, { text: teks, mentions: participants.map((a) => a.id) });
};

handler.help = ['todos *<mensaje opcional>*'];
handler.tags = ['group'];
handler.command = ['todos', 'invocar', 'tagall']
handler.admin = true;
handler.group = true;

export default handler;
