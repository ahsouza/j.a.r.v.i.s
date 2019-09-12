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

// *************************
// *** KEYBOARD SOFTWARE ***
// *************************
const keyboardSoftwareDevelop = Markup.keyboard([
  ['BACK-END', 'FRONT-END', 'DEV-OPS'],
  ['MOBILE']

]).resize().extra()

const keyboardBackEnd = Markup.keyboard([
  ['NODE.JS', 'LARAVEL PHP', 'ASP.NET']

]).resize().extra()

const keyboardFrontEnd = Markup.keyboard([
  ['VUE.JS', 'REACT.JS', 'ANGULAR.JS']

]).resize().extra()

const keyboardDevOps = Markup.keyboard([
  ['ANSIBLE', 'DOCKER', 'JEKINS'],
  ['KUBERNETES']

]).resize().extra()

const keyboardMobile = Markup.keyboard([
  ['KOTLIN', 'REACT NATIVE']

]).resize().extra()



// *************************
// *** KEYBOARD CLOUD ******
// *************************
const keyboardCloudServices = Markup.keyboard([
  ['AWS', 'AZURE', 'HEROKU'],
  ['GCP', 'OPENSHIFT4']

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
  await context.replyWithMarkdown(`_Vamos estudar o que hoje Senhor?_`, keyboardOptionsStudies)
  // await context.replyWithPhoto('')
})

// *************************
// **** REPLYS SOFTWARE ****
// *************************
bot.hears('</> Desenvolvimento De Software',async context => {
  context.replyWithMarkdown(`Ok Senhor! Qual área para Desenvolvimento De Software?`, keyboardSoftwareDevelop)
})

// ***** BACK END ******
bot.hears('BACK-END', async context => {
  context.replyWithMarkdown(`Bacana Senhor! Vejamos o que temos a te oferecer no momento! 🙂`, keyboardBackEnd)	
})

bot.hears('NODE.JS', async context => {
  context.replyWithMarkdown(`Deseja ver um simples GetStarted com *Node.JS* Senhor?`, buttons)	
})

bot.hears('LARAVEL PHP', async context => {
  context.replyWithMarkdown(`Deseja ver um simples GetStarted com *Laravel PHP* Senhor?`, buttons)	
})

bot.hears('ASP.NET', async context => {
  context.replyWithMarkdown(`Deseja ver um simples GetStarted com *Asp.Net/DotNet* Senhor?`, buttons)	
})

// ***** FRONT END ******
bot.hears('FRONT-END', async context => {
  context.replyWithMarkdown(`Legal Senhor! Querer algo mais leve é sempre bom, qual seria a tecnologia?`, keyboardFrontEnd)	
})

bot.hears('VUE.JS', async context => {
  context.replyWithMarkdown(`Deseja ver um simples GetStarted com *Vue.JS* Senhor?`, buttons)	
})

bot.hears('REACT.JS', async context => {
  context.replyWithMarkdown(`Deseja ver um simples GetStarted com *React.JS* Senhor?`, buttons)	
})

bot.hears('ANGULAR.JS', async context => {
  context.replyWithMarkdown(`Deseja ver um simples GetStarted com *Angular.JS* Senhor?`, buttons)	
})

// ***** DEV OPS ******
bot.hears('DEV-OPS', async context => {
  context.replyWithMarkdown(`Ok Senhor! Qual ferramenta para integrar os Software?`, keyboardDevOps)	
})

bot.hears('ANSIBLE', async context => {
  context.replyWithMarkdown(`Deseja ler um livro sobre *Ansible* Senhor?`, buttons)	
})

bot.hears('DOCKER', async context => {
  context.replyWithMarkdown(`Deseja ler um livro sobre *Docker* Senhor?`, buttons)	
})

bot.hears('JEKINS', async context => {
  context.replyWithMarkdown(`Deseja ler um livro sobre *Jekins* Senhor?`, buttons)	
})

bot.hears('KUBERNETES', async context => {
  context.replyWithMarkdown(`Deseja ler um livro sobre *Kubernetes* Senhor?`, buttons)	
})

// ***** MOBILE ******
bot.hears('MOBILE', async context => {
  context.replyWithMarkdown(`Aplicativos? Ah Bacana! Senhor me diz a tecnologia desejada!`, keyboardMobile)	
})

bot.hears('KOTLIN', async context => {
  context.replyWithMarkdown(`Deseja ler um livro sobre *Kotlin Android* Senhor?`, buttons)	
})

bot.hears('REACT NATIVE', async context => {
  context.replyWithMarkdown(`Deseja ler um livro sobre *React Native* Senhor?`, buttons)	
})

// *************************
// ******REPLYS CLOUD ******
// *************************
bot.hears('👾 Implantação De Serviços/Software',async context => {
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