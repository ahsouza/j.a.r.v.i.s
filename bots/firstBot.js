const env = require('../.env')

const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

// Ao clicar no botão START de seu bot no aplicativo telegram, será executado a seguinte instrução:
bot.start(context => {
	const from = context.update.message.from
	console.log(from)

	context.reply(`Seja bem vindo, ${from.first_name}!`)
})

// Ao digitar qualquer texto na janela de conversação do Bot terá a seguinte função assíncrona como resposta 
bot.on('text', async (context, next) => {
  await context.reply('Teste Texto1')	
})

bot.on('text', async context => {
  await context.reply('Teste texto2')	
})


// Start bot
bot.startPolling()