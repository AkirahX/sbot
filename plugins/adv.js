let handler = async (m, { conn, text }) => {
    if (!text) throw 'Para que deseja aplicar uma advertĂȘncia?'
    who = `${text}@s.whatsapp.net`
    //if (!who) throw 'Marque a quem deseja aplicar uma advertĂȘncia.'
    let users = global.db.data.users
    users[who].adv = users[who].adv + 1
    conn.reply(m.chat, `AdvertĂȘncia aplicada.`, m)
}
handler.help = ['adv']
handler.tags = ['owner']
handler.command = /^adv$/i
handler.rowner = true

module.exports = handler
