const handler = async (m, { conn, args, text }) => {
  let user;
  
  if (args[0]) {
    // Si se pasa un número o @mención
    let numero = args[0].replace(/\D/g, '') + '@s.whatsapp.net';
    user = numero;
  } else {
    // Si no se pasa nada, usa el autor del mensaje
    user = m.sender;
  }

  let ppUrl;
  try {
    ppUrl = await conn.profilePictureUrl(user, 'image');
  } catch (e) {
    ppUrl = 'https://i.imgur.com/0pFZnyK.jpg'; // Imagen por defecto
  }

  await conn.sendFile(m.chat, ppUrl, 'perfil.jpg', `📸 Esta es la foto de perfil de:\n*${user.split('@')[0]}*`, m);
};

handler.help = ['fotoperfil [@usuario | número]'];
handler.tags = ['herramientas'];
handler.command = /^(fotoperfil|profilepic|pp)$/i;
handler.group = false;

export default handler;
