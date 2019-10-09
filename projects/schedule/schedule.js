const env = require('../../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const moment = require('moment')
const {   
        getSchedule,
        getTask,
        getTasks,
        getCompleted,
        setTask,
        concludeTask,
        deleteTask } = require('./scheduleServices')

const bot = new Telegraf(env.token)

bot.start(context => {
  const name = context.update.message.from.first_name + ' ' + context.update.message.from.last_name
  context.reply(`Seja Bem Vindo, ${name}!`)
})

const formatDate = data => data ? moment(data).format('DD/MM/YYYY') : ''

const showTask = async (context, taskId, newMsg = false) => {
  const task = await getTask(taskId)
  const conclusion = task.dt_conclusao ? `\n<b>Concluída em:</b> ${formatDate(task.dt_conclusao)}` : ''
  
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

const buttonsSchedule = tasks => {
  const buttons =tasks.map(item => {
    const data = item.dt_prevista ?
      `${moment(item.dt_prevista).format('DD/MM/YYYY')} - ` : ''
    return [Markup.callbackButton(`${data}${item.descricao}`, `show ${item.id}`)]  
  })
  return Extra.markup(Markup.inlineKeyboard(buttons, { columns: 1} ))
}

const buttonsTask = idTask => Extra.HTML().markup(Markup.inlineKeyboard([
  Markup.callbackButton('✔️', `concluir ${idTask}`),
  Markup.callbackButton('📅', `setData ${idTask}`),
  Markup.callbackButton('💬', `addNota ${idTask}`),
  Markup.callbackButton('✖️', `excluir ${idTask}`)
], {columns: 4}))

// COMANDOS
bot.command('hoje', async context => {
  const tasks = await getSchedule(moment())
  context.reply(`Aqui está sua agenda de hoje Senhor!`, buttonsSchedule(tasks))
})

bot.command('amanha', async context => {
  const tasks = await getSchedule(moment().add({day: 1}))
  context.reply(`Aqui está a sua agenda entre hoje e o amanhã!`, buttonsSchedule(tasks))
})

bot.command('semana', async context => {
  const tasks = await getSchedule(moment().add({week: 1}))
  context.reply(`Está é suas tarefas da semana`, buttonsSchedule(tasks))
})

bot.command('concluidas', async context => {
  const tasks = await getCompleted()
  context.reply(`Aqui está as tarefas que você já concluiu`, buttonsSchedule(tasks))
})

bot.command('pendentes', async context => {
  const tarefas = await getTarefas()
  context.reply(`Estas são as tarefas sem data definida, incompletas`, buttonsSchedule(tasks))
})

// ACTIONS BOT
bot.action(/exibir (.+)/, async context => {
  await showTask(context, context.match[1])
})

bot.action(/concluir (.+)/, async context => {
  await concludeTask(context.match[1])
  await showTask(context, context.match[1])
  await context.reply(`Tarefa Concluída!`)
})

bot.action(/excluir (.+)/, async context => {
  await deleteTask(context.match[1])
  await context.editMessageText(`Tarefa Excluída!`)
})

bot.on('text', async context => {
  try {
    const task = await setTask(context.update.message.text)
    await showTask(context, task.id, true)
  }catch (err) {
    console.log(err)
  }
})

bot.startPolling()