let handler = async (m, { conn }) => {
  let texto = `
🌸 *REGLAS OFICIALES DE LUNA-BOT* 🌙

1️⃣ _NO SPAM DE COMANDOS_
2️⃣ _NO AÑADIR AL BOT OFICIAL A GRUPOS A MENOS QUE EL DUEÑO DEL NÚMERO TE LO PERMITA_
3️⃣ _LA OWNER NO SE HACE RESPONSABLE DEL MAL USO DE LA BOT_
4️⃣ _SI QUIERES UN BOT PARA TU GRUPO PUEDES HACERTE SUB-BOT_

✨ Gracias por usar *Luna-Bot*. Respeta las reglas para una mejor experiencia.
`

  await conn.sendMessage(m.chat, {
    image: { url: 'https://files.catbox.moe/t3xaiu.jpg' }, // Imagen kawaii sugerida
    caption: texto,
  }, { quoted: m })
}
handler.command = /^reglas$/i
export default handler
