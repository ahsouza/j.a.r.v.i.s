const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(async content => {
  await content.reply(`Seja bem vindo, ${content.update.message.from.first_name}! 😃`)	
  await content.replyWithHTML(`Destacando mensagem <b>HTML</b> <i>de várias formas</i> <code>ahsouza</code> <a href='https://ahsouza.github.com'> Site</a>`)
  await content.replyWithMarkdown('Destacando mensagem com *Markdown*')
  // await content.replyWithPhoto({source: `${__dirname}/assets/jarvis.jpg`})
})

bot.startPolling()