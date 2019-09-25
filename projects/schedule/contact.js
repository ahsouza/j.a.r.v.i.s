const env = require('../../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const moment = require('moment')
const { getContact, getTask } = require('./ contactServices.')

const bot = new Telegraf(env.token)

bot.start(context => {
  const name = context.update.message.from.first_name + ' ' context.update.message.from.last_name
  context.reply(`Seja Bem Vindo, ${name}!`)
})

const formatDate = data => data ? moment(data).format('DD/MM/YYYY') : ''

const showTask = async (context, taskId, newMsg = false) => {
  const task = await getTask(taskId)
  const conclusion = task.dt_conclusao ? `\n<b>Concluída em:</b> ${formatDate(task.dt_conclusao)}`

  const msg = `
  	<b>${task.descricao}</b>
  	<b>Previsão:</b> ${formatDate(task.dt_prevista)}${conclusion}
  	<b>Observações:</b>\n${task.observacao || ''}
  ` 	 

  if(newMsg) {
  	context.reply(msg, buttonsTask(taskId))
  } else {
  	context.editMessageText(msg, buttonsTask(taskId))
  }
}