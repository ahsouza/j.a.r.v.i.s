const env = require('../../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const moment = require('moment')
const { getContact, getTask } = require('./scheduleServices.js')

const bot = new Telegraf(env.token)

bot.start(context => {
  const name = context.update.message.from.first_name + ' ' + context.update.message.from.last_name
  context.reply(`Seja Bem Vindo, ${name}!`)
})

const formatDate = data => data ? moment(data).format('DD/MM/YYYY') : ''

const showTask = async (context, taskId, newMsg = false) => {
  const task = await getTask(taskId)
  const conclusion = task.dt_conclusao ? `\n<b>Concluída em:</b> ${formatDate(task.dt_conclusao)}`

  const msg = `
  	<b>${task.descricao}</b>
  	<b>Previsão:</b> ${formatDate(task.dt_prevista)}${conclusion}
  	<b>Observações:</b>\n${task.observacao || ''}`

  if(newMsg) {
  	context.reply(msg, buttonsTask(taskId))
  } else {
  	context.editMessageText(msg, buttonsTask(taskId))
  }
}

const buttonsSchedule = tasks => {
  const buttons =tasks.map(item => {
    const data = item.dt_previsao ?
      `${moment(item.dt_previsao).format('DD/MM/YYYY')} - ` : ''
    return [Markup.callbackButton(`${data}${item.descricao}`, `show ${item.id}`)]  
  })
  return Extra.markup(Markup.inlineKeyboard(buttons, { columns: 1} ))
}

const buttonsTask = idTask => Extra.HTML().markup(Markup.inlineKeyboard([
  Markup.callbackButton('✔️', `concluir ${idTask}`),
  Markup.callbackButton('📅', `setData ${idTask}`),
  Markup.callbackButton('💬', `addNota ${idTask}`),
  Markup.callbackButton('✖️ ', `excluir ${idTask}`)
], {columns: 4}))

// COMANDOS
bot.command('dia', async context => {
  const tasks = await getSchedule(moment())
  context.reply(`Aqui está sua agenda do dia Senhor!`, buttonsSchedule(tasks))
})

// ACTIONS BOT
bot.action(/exibir (.+)/, async context => {
  await showTask(context, context.match[1])
})

bot.startPolling()