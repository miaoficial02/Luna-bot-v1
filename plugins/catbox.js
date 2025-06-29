import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

export const comando = /^(catbox)$/i;

export async function handler(m, { conn }) {
  let q = m.quoted || m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime) return m.reply('✉️ Responde a una imagen, sticker, video o archivo que quieras subir a Catbox.');

  try {
    let media = await conn.downloadMediaMessage(q);
    let filePath = `./temp_${Date.now()}`;

    fs.writeFileSync(filePath, media);

    let form = new FormData();
    form.append('reqtype', 'fileupload');
    form.append('fileToUpload', fs.createReadStream(filePath));

    let res = await axios.post('https://catbox.moe/user/api.php', form, {
      headers: form.getHeaders(),
    });

    fs.unlinkSync(filePath); // eliminar archivo temporal

    m.reply(`✅ Archivo subido con éxito!\n\n🌐 Link: ${res.data}`);
  } catch (e) {
    console.error(e);
    m.reply('❌ Error al subir el archivo a Catbox.');
  }
}
