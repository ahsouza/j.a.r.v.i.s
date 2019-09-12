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

const keyboardOptionsLearn = Markup.keyboard([
  ['DOCUMENTAÇÃO','LIVRO', 'LINKS'],
  ['GITHUB', 'GET-STARTED', 'VÍDEOS']
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
bot.action('n', context => {
  context.replyWithMarkdown('Tá bem, vamos voltar para as tecnologias *Back-End* !')
})
bot.action('s', async context => {
  context.reply('Ok! Como deseja aprender?', keyboardOptionsLearn)
})
bot.hears('DOCUMENTAÇÃO', async context => {
  context.replyWithMarkdown(`Aqui está uma [documentação](https://nodejs.org/docs/latest-v11.x/api/http.html) completa da fundação *Node.JS*`)
})
bot.hears('GET-STARTED', async context => {
  context.replyWithMarkdown(`Que tal este [GetStarted Simples](https://nodejs.org/en/docs/guides/getting-started-guide/) & [Contentful](https://github.com/contentful/the-example-app.nodejs)`)
})
bot.hears('GITHUB', async context => {
  context.replyWithMarkdown(`Um bom exemplo no [GitHub](https://github.com/heroku/node-js-sample)`)
})
bot.hears('LIVROS', async context => {
  context.replyWithMarkdown(`Um bom [Livro](https://drive.google.com/open?id=1-IBFIeGHhqjggIHDbpsjOr_-c_B5kTkA) para refrescar a mente Senhor!`)
})
bot.hears('LINKS', async context => {
  context.replyWithMarkdown(`Achei este [link](https://www.airpair.com/javascript/node-js-tutorial) que possa servir como ajuda Senhor!`)
})
bot.hears('VÍDEOS', async context => {
  context.replyWithMarkdown(`Este é um bom começo em vídeo aula no [YouTube](https://www.youtube.com/watch?v=LLqq6FemMNQ&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B) Senhor!`)
})


bot.hears('LARAVEL PHP', async context => {
  context.replyWithMarkdown(`Deseja ver um simples GetStarted com *Laravel PHP* Senhor?`, buttons)	
})
bot.action('n', context => {
  context.replyWithMarkdown('Tá bem, vamos voltar para as tecnologias *Back-End* !')
})
bot.action('s', async context => {
  context.reply('Ok! Como deseja aprender?', keyboardOptionsLearn)
})
bot.hears('DOCUMENTAÇÃO', async context => {
  context.replyWithMarkdown(`Aqui está uma [documentação](https://laravel.com/docs/6.0) completa da fundação *Laravel 6.0*`)
})
bot.hears('GET-STARTED', async context => {
  context.replyWithMarkdown(`Que tal este [GetStarted Simples](https://laravel.com/docs/6.0/installation/) & [Contentful](https://github.com/contentful/contentful-laravel)`)
})
bot.hears('GITHUB', async context => {
  context.replyWithMarkdown(`Um bom exemplo no [GitHub](https://github.com/laravel/laravel)`)
})
bot.hears('LIVROS', async context => {
  context.replyWithMarkdown(`Um bom [Livro](https://drive.google.com/open?id=1Rhzvg7jLGnQeZvrYaQX0OubWcfcmOxEx) para refrescar a mente Senhor!`)
})
bot.hears('LINKS', async context => {
  context.replyWithMarkdown(`Achei este [link](https://www.techiediaries.com/php-laravel-crud-mysql-tutorial/) que possa servir como ajuda Senhor!`)
})
bot.hears('VÍDEOS', async context => {
  context.replyWithMarkdown(`Este é um bom começo em vídeo aula no [YouTube](https://www.youtube.com/watch?v=RBQVKTLsi8Y&list=PL8p2I9GklV45qSQg-9EhKoQiW1pYZbC8l) Senhor!`)
})

bot.hears('ASP.NET', async context => {
  context.replyWithMarkdown(`Deseja ver um simples GetStarted com *Asp.Net/DotNet* Senhor?`, buttons)	
})
bot.action('n', context => {
  context.replyWithMarkdown('Tá bem, vamos voltar para as tecnologias *Back-End* !')
})
bot.action('s', async context => {
  context.reply('Ok! Como deseja aprender?', keyboardOptionsLearn)
})
bot.hears('DOCUMENTAÇÃO', async context => {
  context.replyWithMarkdown(`Aqui está uma [documentação](https://docs.microsoft.com/pt-br/aspnet/#pivot=core&panel=core_overview) completa da fundação *Microsoft ASP.NET Core*`)
})
bot.hears('GET-STARTED', async context => {
  context.replyWithMarkdown(`Que tal este [GetStarted Simples](https://docs.microsoft.com/en-us/aspnet/core/getting-started/?view=aspnetcore-2.2&tabs=linux) & [Contentful](https://github.com/contentful/contentful.net)`)
})
bot.hears('GITHUB', async context => {
  context.replyWithMarkdown(`Um bom exemplo no [GitHub](https://github.com/aspnet/samples)`)
})
bot.hears('LIVROS', async context => {
  context.replyWithMarkdown(`Um bom [Livro](https://drive.google.com/open?id=1IQR7VV1-dDpxAEecMbXDYJJjA41qulWz) para refrescar a mente Senhor!`)
})
bot.hears('LINKS', async context => {
  context.replyWithMarkdown(`Achei estes links: [link1](https://hackernoon.com/asp-net-core-learn-crud-operations-in-ado-net-from-zero-to-hero-a0109ed2f8a4) & [link2](https://imasters.com.br/back-end/asp-net-core-crud-usando-blazor-e-entity-framework-core-parte-01) que possa servir como ajuda Senhor!`)
})
bot.hears('VÍDEOS', async context => {
  context.replyWithMarkdown(`Este é um bom começo em vídeo aula no [YouTube](https://www.youtube.com/watch?v=Z3DU-Jpft74&list=PLXik_5Br-zO-5SRVrpNHnP4uVMBL2Gqz2) Senhor!`)
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