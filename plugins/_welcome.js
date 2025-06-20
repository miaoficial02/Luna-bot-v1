import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;
  const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}  
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://raw.githubusercontent.com/The-King-Destroy/Adiciones/main/Contenido/1745522645448.jpeg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]
  let txt = 'ゲ◜៹ NEW MEMBER ៹◞ゲ'
  let txt1 = 'ゲ◜៹ BYE MEMBER ៹◞ゲ'
  let groupSize = participants.length
  if (m.messageStubType == 27) {
    groupSize++;
  } else if (m.messageStubType == 28 || m.messageStubType == 32) {
    groupSize--;
  }

  if (chat.welcome && m.messageStubType == 27) {
    let bienvenida = `★ *Bienvenido* a ${groupMetadata.subject}\n★ @${m.messageStubParameters[0].split`@`[0]}\n${global.welcom1}\n★ Ahora somos ${groupSize} Miembros.\n❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  Disfruta tu estadía en el grupo!\n> 𝘗𝘰𝘸𝘦𝘳𝘦𝘥 𝘣𝘺:@𝘪𝘵𝘴.𝘮𝘭𝘢.𝘰𝘧𝘪𝘤𝘪𝘢𝘭.`    
    await conn.sendMini(m.chat, txt, dev, bienvenida, img, img, redes, fkontak)
  }
  
  if (chat.welcome && (m.messageStubType == 28 || m.messageStubType == 32)) {
    let bye = `❀ *Adiós* de ${groupMetadata.subject}\n✰ @${m.messageStubParameters[0].split`@`[0]}\n${global.welcom2}\n✦ Ahora somos ${groupSize} Miembros.\n❀⃞̶ׂ֟፝͞🌟 ╌֟፝╼  Te esperamos pronto!\n> 𝘗𝘰𝘸𝘦𝘳𝘦𝘥 𝘣𝘺:@𝘪𝘵𝘴.𝘮𝘭𝘢.𝘰𝘧𝘪𝘤𝘪𝘢𝘭.`
    await conn.sendMini(m.chat, txt1, dev, bye, img, img, redes, fkontak)
  }}
