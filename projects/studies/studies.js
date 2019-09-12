const env = require('../../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const axios = require('axios')
const bot = new Telegraf(env.token)

const keyboardOptionsStudies = Markup.keyboard([
  ['</> Desenvolvimento De Software', '👾 Implantação De Serviços/Software', '🤖 Automatização De Tarefas'],
  ['🛡 Segurança Cibernética', '💵 Investimentos', '⏱ Administração Geral'],
  ['⚖ Direito Cibernético', '⚖ Direito Do Consumidor', '⚖ Direito Trabalhista'],
  ['💸 Economia'],

]).resize().extra()

const keyboardSoftwareDevelop = Markup.keyboard([
  ['BACK-END', 'FRONT-END', 'DEV-OPS']

]).resize().extra()

const keyboardCloudServices = Markup.keyboard([
  ['AWS', 'OPENSHIFT4', 'GCP'],
  ['HEROKU', 'KUBERNETS', 'SERVELESS']

]).resize().extra()

const buttons = Extra.markup(Markup.inlineKeyboard([
  Markup.callbackButton('Sim', 's'),
  Markup.callbackButton('Não', 'n')
], {columns: 2}))

const location = Markup.keyboard([
  Markup.locationRequestButton('Clique aqui para enviar sua localização')
]).resize().oneTime().extra()

bot.start(async context=> {
  const name = context.update.message.from.first_name + ' ' + context.update.message.from.last_name	
  await context.replyWithMarkdown(`Olá Mestre *${name}*!`)
  await context.replyWithMarkdown(`_Vamos estudar o que hoje?_`, keyboardOptionsStudies)
  // await context.replyWithPhoto('')
})

bot.hears('</> Desenvolvimento De Software',async context => {
  context.replyWithMarkdown(`Ok Senhor! Qual área para Desenvolvimento De Software?`, keyboardSoftwareDevelop)
})

bot.hears('👾 Implantação De Serviços/Software', context => {
  context.replyWithMarkdown(`Ok Senhor! Qual plataforma você deseja obter informações/tutoriais?`, keyboardCloudServices)
})

bot.hears('🤖 Automatização De Tarefas', context => {
  console.log('ok')	
})

bot.hears('🛡 Segurança Cibernética', context => {
  console.log('ok')	
})

bot.hears('💵 Investimentos', context => {
  console.log('ok')	
})

bot.hears('⏱ Administração Geral', context => {
  console.log('ok')	
})

bot.hears('⚖ Direito Cibernético', context => {
  console.log('ok')	
})

bot.hears('⚖ Direito Do Consumidor', context => {
  console.log('ok')	
})

bot.hears('⚖ Direito Trabalhista', context => {
  console.log('ok')	
})

bot.hears('💸 Economia', context => {
  console.log('ok')	
})

bot.startPolling()