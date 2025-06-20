let handler = async (m, { conn, command, usedPrefix }) => {
let img = './src/catalogo.jpg'
let staff = `ᥫ᭡ *EQUIPO DE AYUDANTES* ❀
✰ *Dueño:* Wa.me/5492644131963
✦ *Bot:* ${botname}
⚘ *Versión:* ${vs}
❖ *Libreria:* ${libreria} ${baileys}

❍ *Creador:*

⏤͟͟͞͞♡ @𝑖𝑡𝑠.𝑚𝑖𝑎.𝑜𝑓𝑖𝑐𝑖𝑎𝑙
> 🜸 Rol » *Creador*
> ✧ GitHub » https://github.com/miaoficial02

❒ *Colaboradores:*

⏤͟͟͞͞♡ @Dany
> 🜸 Rol: » *Developer*
> ✧ Number: » Wa.me/525626563519
`
await conn.sendFile(m.chat, img, 'yuki.jpg', staff.trim(), fkontak)
}
  
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
