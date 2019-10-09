const env = require('../../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const moment = require('moment')

const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Scene = require('telegraf/scenes/base')

const {   
        getSchedule,
        getTask,
        getTasks,
        getCompleted,
        setTask,
        concludeTask,
        updateDateTask,
        updateObsTask,
        deleteTask } = require('./scheduleServices')

const bot = new Telegraf(env.token)

bot.start(context => {
  const name = context.update.message.from.first_name + ' ' + context.update.message.from.last_name
  context.reply(`Seja Bem Vindo, ${name}!`)
})

const formatDate = data => data ? moment(data).format('DD/MM/YYYY') : ''

const showTask = async (context, taskId, newMsg = false) => {
  const task = await getTask(taskId)
  const conclusion = task.dt_conclusao ?
    `\n<b>Concluída em:</b> ${formatDate(task.dt_conclusao)}` : ''
  
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
  const buttons = tasks.map(item => {
    const data = item.dt_prevista ?
      `${moment(item.dt_prevista).format('DD/MM/YYYY')} - ` : ''
    return [Markup.callbackButton(`${data}${item.descricao}`, `show ${item.id}`)]  
  })
  return Extra.markup(Markup.inlineKeyboard(buttons, { columns: 1}))
}

const buttonsTask = idTask => Extra.HTML().markup(Markup.inlineKeyboard([
  Markup.callbackButton('✔️', `concluir ${idTask}`),
  Markup.callbackButton('📅', `setData ${idTask}`),
  Markup.callbackButton('💬', `addNota ${idTask}`),
  Markup.callbackButton('✖️', `excluir ${idTask}`),
], {columns: 4}))

// COMANDOS
bot.command('hoje', async context => {
  const tasks = await getSchedule(moment())
  context.reply(`Aqui está sua agenda de hoje Senhor!`, buttonsSchedule(tasks))
})

bot.command('amanha', async context => {
  const tasks = await getSchedule(moment().add({day: 1}))
  context.reply(`Aqui está a sua agenda a partir de amanhã!`, buttonsSchedule(tasks))
})

bot.command('semana', async context => {
  const tasks = await getSchedule(moment().add({week: 1}))
  context.reply(`Está é suas tarefas da semana`, buttonsSchedule(tasks))
})

bot.command('concluidas', async context => {
  const tasks = await getCompleted()
  context.reply(`Aqui está as tarefas que você já concluiu`, buttonsSchedule(tasks))
})

bot.command('tarefas', async context => {
  const tasks = await getTasks()
  context.reply(`Estas são tarefas sem data definida`, buttonsSchedule(tasks))
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

const keyboardDates = Markup.keyboard([
  ['Hoje', 'Amanhã'],
  ['1 Semana', '1 Mês']
]).resize().oneTime().extra()

let idTask = null

// DATA SCENE
const dataScene = new Scene('data')

dataScene.enter(context => {
  idTask = context.match[1]
  context.reply(`Gostaria de definir uma data?`, keyboardDates)
})

dataScene.leave(context => idTask = null)

dataScene.hears(/pendentes/gi, async context => {
  const data = moment()
  handleData(context, data)
})

dataScene.hears(/(Amanh[ãa])/gi, async context => {
  const data = moment().add({ days: 1})
  handleData(context, data)
})

dataScene.hears(/^(\d+) dias?$/gi, async context => {
  const data = moment().add({days: context.match[1]})
  handleData(context, data)
})

dataScene.hears(/^(\d+) semanas?/gi, async context => {
  const data = moment().add({weeks: context.match[1]})
  handleData(context, data)
})

dataScene.hears(/^(\d+) m[eê]s(es)?/gi, async context => {
  const data = moment().add({months: context.match[1]})
  handleData(context, data)
})

dataScene.hears(/(\d{2}\/\d{2}\/\d{4})/g, async context => {
  const data = moment(context.match[1], 'DD/MM/YYYY')
  handleData(context, data)
})

const handleData = async (context, data) => {
  await updatedateTask(idTask, data)
  await context.reply(`Data atualizada!`)
  await showTask(context, idTask, true)

  context.scene.leave()
}

// RECEBA UM ALERTA ENQUANTO NÃO OUVER NENHUMA CONDIÇÃO POSITIVA AS CENAS ACIMA
dataScene.on('message',context => context.reply(`Padrões aceitos\ndd/MM/YYYY\nX dias\nX semanas\nX meses`))

// OBSERVANDO SCENES
const obsScene = new Scene('observacoes')

obsScene.enter(context => {
  idTask = context.match[1]
  context.reply(`Já pode adicionar suas anotações...`)
})

obsScene.leave(context => idTask = null)

obsScene.on('text', async context => {
  const task = await getTask(idTask)
  const newText = context.update.message.text
  const obs = task.observacao ? task.observacao + '\n---\n' + newText: newText

  const res = await updateObsTask(idTask, obs)
  await context.reply(`Observação adicionada com sucesso!`)
  await showTask(context, idTask, true)

  context.scene.leave()
})

obsScene.on('message', context => context.reply(`Apenas Observações em texto são aceitas!`))

const stage = new Stage([dataScene, obsScene])
bot.use(session())
bot.use(stage.middleware())

bot.action(/setData (.+)/, Stage.enter('data'))
bot.action(/addNota (.+)/, Stage.enter('observacoes'))

// INSERI TAREFAS
bot.on('text', async context => {
  try {
    const task = await setTask(context.update.message.text)
    await showTask(context, task.id, true)
  }catch (err) {
    console.log(err)
  }
})

bot.startPolling()