const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start( context => {
  const name = context.update.message.from.first_name
  context.reply(`Seja bem vindo, ${name}!\n Avise se precisar de /ajuda`)
})

bot.command('ajuda', context => context.reply('/ajuda: Mostrar as opções'
	+ '\n/teste1: Testando via hears'
	+ '\n/teste2: Testando via hears 2'
	+ '\n/teste3: Testando via hears 3'
	))

bot.hears('/teste1', context => context.reply('Testando comando "/teste1"'))
bot.hears(/\/teste(2|3)/i, context => context.reply('Resposta padrão para comandos "/teste2" & "/teste3" '))


bot.startPolling()