const env = require('../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)

let list = []

const buttons = () => Extra.markup(
  Markup.inlineKeyboard(
    list.map(item => Markup.callbackButton(item, `delete ${item}`)),
    { columns: 3 }
  )
)

bot.start(async context => {
  const name = context.update.message.from.first_name
  await context.reply(`Seja bem vindo ao Shopping J.A.R.S.I.S, ${name}`)
  await context.reply(`Escreva os itens que você deseja adicionar em seu carrinho de compras...`)

})

bot.on('text', context=> {
  list.push(context.update.message.text)
  context.reply(`${context.update.message.text} foi adicionado!`, buttons())
})

bot.action(/delete (.+)/, context => {
  list = list.filter(item => item !== context.match[1])
  context.reply(`${context.match[1]} foi excluído!`, buttons())
})


// Start Bot
bot.startPolling()