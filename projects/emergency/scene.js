const env = require('../../.env')
const Telegraf = require('telegraf')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Scene = require('telegraf/scenes/base')
const { enter, leave } = Stage
const bot = new Telegraf(env.token)

bot.start(context => {
  const name = context.update.message.from.first_name + ' ' + context.update.message.from.last_name
  context.reply(`Seja bem vindo Sr. ${name}!`)
  context.reply(`Entre com /help para iniciar...`)
})

const emergencyScene = new Scene('help')

emergencyScene.enter(context => context.reply('Entrando em estado de Emergência'))
emergencyScene.leave(context => context.reply('Saindo do estado de Emergência'))

emergencyScene.command('sair', leave())

emergencyScene.use(async (context, next) => {
  await context.reply('Você está em situações de emergência, digite algum dos comandos abaixo para que possa te ajudar em algo...')
  await context.reply('comandos: \n/corpo-de-bombeiros \n/policia-militar \n/policia-rodoviaria-federal \n/policia-rodoviaria-estadual \n/defesa-civil \n/samu \n/salvamar')

  next()
})

emergencyScene.command('corpo-de-bombeiros', context => {

})

emergencyScene.command('policia-militar', context => {
	
})

emergencyScene.command('policia-rodoviaria-federal', context => {
	
})

emergencyScene.command('policia-rodoviaria-estadual', context => {
	
})

emergencyScene.command('defesa-civil', context => {
	
})

emergencyScene.command('salvamar', context => {
	
})

emergencyScene.command('samu', context => {
	
})