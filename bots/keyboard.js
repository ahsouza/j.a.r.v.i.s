const env = require('../.env')
const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)

const keyboardMyWorks = Markup.keyboard([
  ['🤖 Bots', '🤖 Deploy', '🤖 SysAdmin'],
  ['🤖 Automatização', '🤖 Software', '🔐 Segurança'],
  ['🤖 BDA', '🤖 Microserviços', '📈 Análise De Sistemas']
]).resize().extra()

const keyboardMyTasks = Markup.keyboard([
  ['🏆 Carreira Profissional', '📚 Estudos', '🧖‍♂ Higienização'],
  ['🏋‍♂ Exercício Físico', '🧘‍♂ Meditação', '📚 Leitura'],
  ['⌨ Codificação', '💰 + Capital', '💉 Saúde'],
  ['🗞 Notícias']
]).resize().extra()

const keyboardMyStudies = Markup.keyboard([
  ['👾 Desenvolvimento De Software', '👾 Implantação De Serviços/Software', '🤖 Automatização De Tarefas'],
  ['🛡 Segurança Cibernética', '💵 Investimentos', '⏱ Administração Geral'],
  ['⚖ Direito Cibernético', '⚖ Direito Do Consumidor', '⚖ Direito Trabalhista'],
  ['💸 Economia'],
]).resize().extra()

const keyboardMyShopping = Markup.keyboard([
  ['📔 Livros', '🎖 Cursos', '📑 Certificações'],
  ['🏫 Acadêmicos', '✈ Passagens', '⛴ Cruzeiros'],
  ['👔 Vestimentos', '💾 Hardwares']
]).resize().extra()

const keyboardMyDreams = Markup.keyboard([
  ['❤ Casamento', '🏰 Castelo', '👨‍👩‍👧‍👦 Família'],
  ['🛡 Proteção', '👣 Prever Crimes/Erros'],
]).resize().extra()

const keyboardMyCommunities = Markup.keyboard([
  ['🏴‍☠ ArgoCrew', '💉 Hacking Health']
]).resize().extra()

const keyboardMyBusiness = Markup.keyboard([
  [' ***', ' ***', ' ***']
]).resize().extra()

const keyboardGiftsForMyLove = Markup.keyboard([
  ['👑', '👑', '👑'],
  ['🎮 PS5', '💻 MacBook', '📱 IPhone X'],
  ['👑', '👑', '👑'], 
  ['✈ Viagens', '👑', '👑']
]).resize().extra()

const keyboardGiftsForMySon = Markup.keyboard([
  ['🎮 PS5', '🕶 Óculos Realidade Virtual', '🕹 N3DS'],
  ['🎁 Coleção LEGO🧩', '✈ Passeio Disney', '🛍 Vestimentos'],
  [' ***', ' ***', ' ***'],
  [' ***', ' ***', ' ***'],
]).resize().extra()

const keyboardObligationsToMySon = Markup.keyboard([
  ['✍ Tarefas De Casa', ' Higienização', '📘 Estudos'],
  ['😷 Dentista', '👩‍⚕ Pediatra', ' Organização']
]).resize().extra()


bot.start(async context => {
  
  await context.reply(`Olá Mestre! ${context.update.message.from.first_name}!`)
  await context.reply(`Em que posso ser útil?`, 
  	Markup.keyboard(['Trabalho', 'Tarefas', 'Estudos', 'Compras', 'Futura Esposa', 'Filho', 'Negócios', 'Comunidades', 'Sonhos']).resize().oneTime().extra())
})

// *******************
// **** TRABALHOS ****
// *******************
bot.hears('Trabalho', async context => {
  
  await context.reply(`Ah Bacana! Vamos ver o que temos de obrigações para seu ${context.match} Senhor`)
  await context.reply('Qual seria sua ordem de serviço para hoje Mestre?', keyboardMyWorks)
})

bot.hears('🤖 Bots', context => context.reply('Ok! Então vamos para as opções de Bots, espero que não queira me substituir Senhor!'))
bot.hears('🤖 Deploy', context => context.reply('Bacana, mais uma aplicação mandaremos para o ar!'))
bot.hears('🤖 SysAdmin', context => context.reply('Vamos gerenciar qual Sistema Operacional, Senhor?'))
bot.hears('🤖 Automatização', context => context.reply('O que deseja automatizar?'))
bot.hears('🤖 Software', context => context.reply('Em quais tecnologias deseja desenvolver o Software?'))
bot.hears('🔐 Segurança', context => context.reply('Hum, segurança nunca é de mais. Irei mostrar nossas ferramentas!'))


// *******************
// ***** TAREFAS *****
// *******************
bot.hears('Tarefas', async context => {
  
  await context.reply(`Hum vejo que tem ${context.match} a ser realizadas Senhor`)
  await context.reply('Qual delas deseja iniciar?', keyboardMyTasks)
})

bot.hears('🏆 Carreira Profissional', context => context.reply('Ok Senhor, vamos ver o rendimento de sua carreira!'))
bot.hears('📚 Estudos', context => context.reply('Bacana, continuaremos os estudos Mestre!'))
bot.hears('🧖‍♂ Higienização', context => context.reply('Está na hora de uma limpeza Senhor!'))
bot.hears('🏋‍♂ Exercício Físico', context => context.reply('O que deseja automatizar?'))
bot.hears('🧘‍♂ Meditação', context => context.reply('Que tal separarmos alguns minutos para meditação?'))
bot.hears('📚 Leitura', context => context.reply('Estudos é sempre bom, a cada absorção de conhecimentos melhor será estruturada sua mente!'))
bot.hears('⌨ Codificação', context => context.reply('Vamos programar em que Senhor?'))
bot.hears('💰 + Capital', context => context.reply('Vejo que precisa de mais capitais Senhor, vamos ver algumas sugestões para gerar isto!'))
bot.hears('💉 Saúde', context => context.reply('Saúde em primeiro lugar, e agora vamos solucionar isto!'))
bot.hears('🗞 Notícias', context => context.reply('Vamos escolher quais tipos de notícias e em quais lugares deseja ver!'))

// *******************
// ***** ESTUDOS *****
// *******************
bot.hears('Estudos', async context => {
  
  await context.reply(`Precisa continuar seus ${context.match} Senhor, até se tornar um grande Mestre`)	
  await context.reply('Qual dos tópicos podemos continuar ou iniciar?', keyboardMyStudies)
})


// *******************
// ***** COMPRAS *****
// *******************
bot.hears('Compras', async context => {
  
  await context.reply(`Opa! uma ${context.match} Senhor, ok vamos gastar um pouco!`)
  await context.reply('O que deseja comprar Mestre?', keyboardMyShopping)
})

// *******************
// ***** ESPOSA ******
// *******************
bot.hears('Futura Esposa', async context => {
  
  await context.reply(`Hum que amor, presentes para a ${context.match} e isso é ótimo Senhor`)	
  await context.reply('O que deseja para ela?', keyboardGiftsForMyLove)
})


// ***************************
// **** OBRIGAÇÕES FILHO *****
// ***************************
bot.hears('Obrigações Filho', async context => {
  
  await context.reply(`Ok Senhor! vamos saber mais sobre as ${context.match}`)
  await context.reply('Que tal escolher uma de suas obrigações para saber seu rendimento?', keyboardObligationsToMySon)
})

// ***************************
// **** PRESENTES FILHO ******
// ***************************
bot.hears('Presentear o Filho', async context => {
  
  await context.reply(`Ok Senhor! espero que seu filho esteja indo bem na escola para ${context.match}`)
  await context.reply('Qual presente deseja dar para ele?', keyboardGiftsForMySon)
})


// ***************************
// ********* NEGÓCIOS ********
// ***************************
bot.hears('Negócios', async context => {
  
  await context.reply(`Ah que bacana! vamos saber mais de seus ${context.match}`)
  await context.reply('Acho uma boa idéia selecionar o negócio que mais precisa de seu apoio Senhor', keyboardMyBusiness)
})



// ***************************
// ******* COMUNIDADES *******
// ***************************
bot.hears('Comunidades', async context => {
  
  await context.reply(`Ah que legal! vamos da uma olhada como anda nas ${context.match} que você participa`)
  await context.reply('Escolha a comunidade Senhor', keyboardMyCommunities)
})


// ***************************
// ********* SONHOS **********
// ***************************
bot.hears('Sonhos', async context => {
  
  await context.reply(`Nossa que bacana! Tem ${context.match} a ser realizados Senhor`)	
  await context.reply('Que tal escolher o que está mais motivado a realizar?', keyboardMyDreams)
})

bot.on('text', context => context.reply('Bom, acho que hoje não posso ser útil para o Senhor!'))
// Start Bot
bot.startPolling()