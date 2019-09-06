const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(context => {

  if(context.update.message.from.id === env.id)	{
  	context.reply('Ao seu dispor, Mestre!')
  } else {
  	context.reply('Sinto muito, mas eu só falo com o meu mestre!')

  }

})

// Start Bot
bot.startPolling()