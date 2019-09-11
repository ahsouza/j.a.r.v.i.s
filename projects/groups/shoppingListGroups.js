const env = require('../../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)

let data = {}

const generateButtons = list => Extra.markup(
  Markup.inlineKeyboard(
  	list.map(item => Markup.callbackButton(item, `delete ${item}`))
  	  , { columns: 3 }
  )
) 

bot.start(async context => {
  const name = context.update.message.from.first_name + context.update.message.from.last_name
  await context.reply(`Seja bem vindo, ${name}!`)
  await context.reply('Digite os itens que deseja adicionar em seu carrinho de compras...')
})

bot.use((context, next) => {
  const chatID = context.chat.id
  // Verificando se contém o ID do chat em data variavel
  if(!data.hasOwnProperty(chatID)) data[chatID]	= []
  context.itens = data[chatID]
  next()	
})

bot.on('text', context => {
  let text = context.update.message.text
  if(text.startsWith('/')) text = text.substring(1)	
  context.itens.push(text)	
  ccontext.reply(`${text} adicionado com sucesso!`, generateButtons(context.itens))
})

bot.action(/delete (.+)/, context => {
  const indice = context.itens.indexOf(context.match[1])	
  if (indice >= 0) context.itens.splice(indice, 1)
  context.reply(`${context.match[1]} foi excluído!`, generateButtons(context.itens))
})

bot.startPolling()