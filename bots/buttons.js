const env = require('../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)

let contagem = 0
// Teclado inline
const buttons = Extra.markup(Markup.inlineKeyboard([
  Markup.callbackButton('+1', 'add 1'),
  Markup.callbackButton('+10', 'add 10'),
  Markup.callbackButton('+100', 'add 100'),
  Markup.callbackButton('-1', 'sub 1'),
  Markup.callbackButton('-10', 'sub 10'),
  Markup.callbackButton('-100', 'sub 100'),
  Markup.callbackButton('Zerar', 'reset'),
  Markup.callbackButton('Resultado', 'result')
]), { columns: 3 })

bot.start(async context => {
  const name = context.update.message.from.first_name
  await context.reply(`Seja bem vindo, ${name}`)
  await context.reply(`Contagem atual está em ${contagem}`, buttons)
})

bot.action(/add (\d+)/gi, context => {
  contagem += parseInt(context.match[1])
  context.reply(`A contagem atual é de: ${contagem}`, buttons)
})

bot.action(/sub (\d+)/, context => {
  contagem -= parseInt(context.match[1])
  context.reply(`A contagem atual é de: ${contagem}`, buttons)
})

bot.action('reset', context => {
  contagem = 0
  context.reply(`A contagem, atual está em ${contagem}`, buttons)	
})

bot.action('result', context => {
  context.answerCbQuery(`A contagem atual está em ${contagem}`)	
})

bot.startPolling()