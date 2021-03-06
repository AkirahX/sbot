let handler = async (m, { conn, args }) => {
  let group = m.chat
  if (/^[0-9]{5,16}-[0-9]+@g\.us$/.test(args[0])) group = args[0]
  //if (!/^[0-9]{5,16}-[0-9]+@g\.us$/.test(group)) throw 'Utilizável somente em grupos'
  let groupMetadata = await conn.groupMetadata(group)
  if (!groupMetadata) throw 'groupMetadata is undefined :\\'
  if (!'participants' in groupMetadata) throw 'participants is not defined :('
  let me = groupMetadata.participants.find(user => user.jid === conn.user.jid)
  if (!me) throw 'Eu não faço parte deste grupo :('
  if (me.isAdmin !== true) throw 'Não sou administrador para conseguir o link.'
  m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['linkgp']
handler.tags = ['group']
handler.command = /^link(g?p)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

