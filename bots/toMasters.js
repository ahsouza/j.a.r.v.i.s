const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(context => {

  if(context.update.message.from.id === env.id)	{
  	context.reply('Ao seu dispor, Mestre!')
  } else {
  	context.reply('Sinto muito, mas eu só falo com o meu mestre!')

  }

})

bot.on('text', context => {
  context.reply(`Mensagem '${context.update.message.text}' recebido com sucesso!`)
})

bot.on('location', context => {
  const location = 	context.update.message.location
  console.log(location)
  context.reply(`Entendido Senhor, as coordenadas de sua localização está em
  	Lat: ${location.latitude},
  	Lon: ${location.longitude}!`)
})

bot.on('contact', context => {
  const contact = context.update.message.contact
  console.log(contact)	
  context.reply(`Lembrarei do(a)
  	${contact.first_name} (${contact.phone_number})`)
})

bot.on('voice', content => {
  const voice = context.update.message.voice
  console.log(voice)
  context.reply(`Audio recebido com sucesso, este aúdio possui ${voice.duration} segundos`)
})

bot.on('photo', content => {
  const photo = context.update.message.sticker
  console.log(sticker)	
  content.reply(`Bacana! vejo que você enviou
  	o ${sticker.emoji} do conjunto ${sticker.set_name}`)
})


// Start Bot
bot.startPolling()