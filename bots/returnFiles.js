const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
const axios = require('axios')

bot.on('voice', async content => {
  const id = content.update.message.voice.file_id
  // Pegando arquivo do chat Telegram
  const res = await axios.get(`${env.apiUrl}/getFile?file_id=${id}`)
  // Retornando o mesmo aúdio para chat Telegram
  content.replyWithVoice({ url: `${env.apiFileUrl}/${res.data.result.file_path}`})
})

bot.on('photo', async content => {
  const id = content.update.message.photo[0].file_id
  // Pegando arquivo do chat Telegram
  const res = await axios.get(`${env.apiUrl}/getFile?file_id=${id}`)
  // Retornando a mesma imagem para chat Telegram com dimensões diferentes
  content.replyWithPhoto({ url: `${env.apiFileUrl}/${res.data.result.file_path}`})
})

// Start Bot
bot.startPolling()