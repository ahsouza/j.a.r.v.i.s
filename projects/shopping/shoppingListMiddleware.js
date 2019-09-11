const env = require('../../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const session = require('telegraf/session')
const bot = new Telegraf(env.token)

const buttons = list => Extra.markup(
  Markup.inlineKeyboard(
  	list.map(item => Markup.callbackButton(item, `delete ${item}`)), { columns: 3 }
  )
)

bot.use(session())

const verificationUser = (context, next) => {
  const equalIDmsg = context.update.message && context.update.message.from.id == env.id
  const equalIDCallback = context.update.callback_query && context.update.callback_query.from.id == env.id

  if (equalIDmsg || equalIDCallback) {
    next()
  } else {
    context.reply('Desculpe, sou autorizado a falar apenas com meu Mestre!')
  }
}

const loading = ({ reply }, next) => reply('carregando...').then(() => next())


bot.start(verificationUser, async context => {
  const name = context.update.message.from.first_name
  await context.reply(`Seja bem vindo, ${name}!`)	
  await context.reply('Digite os itens que você deseja adicionar ao carrinho de compras...')
  context.session.list = []
})

bot.on('text', verificationUser, loading, context => {
  let msg = context.update.message.text
  context.session.list.push(msg)
  context.reply(`${msg} adicionado com sucesso!`, buttons(context.session.list))
})

bot.action(/delete (.+)/, verificationUser, context => {
  context.session.list = context.session.list.filter(item => item !== context.match[1])
  context.reply(`${context.match[1]} foi excluído!`, buttons(context.session.list))
})

bot.startPolling()