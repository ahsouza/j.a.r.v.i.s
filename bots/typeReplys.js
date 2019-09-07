const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(async content => {
  await content.reply(`Seja bem vindo, ${content.update.message.from.first_name}! 😃`)	
  await content.replyWithHTML(`Destacando mensagem <b>HTML</b> <i>de várias formas</i> <code>ahsouza</code> <a href='https://ahsouza.github.com'> Site</a>`)
  await content.replyWithMarkdown('Destacando mensagem com *Markdown*')
  await content.replyWithPhoto({source: `${__dirname}/../assets/jarvis.jpg`})
  // Or
  await content.replyWithPhoto({ url: 'https://t1.ea.ltmcdn.com/pt/images/3/5/4/img_quando_se_podem_separar_os_gatinhos_da_sua_mae_21453_600.jpg'})
  await content.replyWithLocation(29.9773008, 31.1303068)
  await content.replyWithVideo('https://www.youtube.com/watch?v=umokQ920a8U&list=LLm1wbADwaDcrQzpUz5uOZGQ&index=38')
})


// Start bot
bot.startPolling()