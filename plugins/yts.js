let yts = require('yt-search')
let handler = async (m, { text }) => {
  if (!text) throw 'O que deseja?'
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
*${v.title}* (${v.url})
Duração: ${v.timestamp}
Upload ${v.ago}
${v.views} views
      `.trim()
      case 'channel': return `
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) Inscritos_
${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n========================\n')
  m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' (pesquisa)')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i
handler.group = true

module.exports = handler
