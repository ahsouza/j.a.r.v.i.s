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
