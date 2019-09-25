const env = require('../../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const moment = require('moment')

const bot = new Telegraf(env.token)

bot.start(context => {
  const name = context.update.message.from.first_name + ' ' context.update.message.from.last_name
  context.reply(`Seja Bem Vindo, ${name}!`)
})