const env = require('../.env')
const telegraf = require('telegraf')
const moment = require('moment')
const bot = new Telegraf(env.token)

bot.hears([/pizza/i, /hamburguer/i, /camarão/i], content => content.reply('Hmm isso é ótimo, vou providenciar seu pedido!'))

bot.hears(/(\d{2}\/\d{2}\/\d{4})/, content => {
  moment.locale('pt-BR')	
  const data = moment(content.match[1], 'DD/MM/YYYY')
  content.reply(`${content.match[1]} cai em ${data.format('dddd')}`)
})

bot.startPolling()