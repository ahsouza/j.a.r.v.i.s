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
  ['DOCUMENTAÇÃO','LIVROS', 'LINKS'],
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

// *****************************
// *** KEYBOARD CYBER-SECURITY *
// *****************************
const keyboardCyberSecurity = Markup.keyboard([
  ['FIREWALL', 'PROXY', 'PROXY-REVERSE'],
  ['WIFI', 'DOCKER-SECURITY', 'KUBERNETES-SECURITY'],
  ['LINUX-SERVER-SECURITY', 'WINDOWS-SERVER-SECURITY', 'KUBERNETES-SECURITY']

]).resize().extra()



const buttons = Extra.markup(Markup.inlineKeyboard([
  Markup.callbackButton('Sim', 's'),
  Markup.callbackButton('Não', 'n')
], {columns: 2}))

// BUTTONS FRONT-END
const optionsVue = Extra.markup(Markup.inlineKeyboard([
  Markup.callbackButton('Quero comprar livro Vue.js', 'comprar vue'),
  Markup.callbackButton('Não quero comprar livro Vue.js', 'não comprar vue')
], {columns: 2}))

const optionsAngular = Extra.markup(Markup.inlineKeyboard([
  Markup.callbackButton('Quero comprar livro Angular.js', 'comprar angular'),
  Markup.callbackButton('Não quero comprar livro Angular.js', 'não comprar angular')
], {columns: 2}))

const optionsReact = Extra.markup(Markup.inlineKeyboard([
  Markup.callbackButton('Quero comprar livro React.js', 'comprar react'),
  Markup.callbackButton('Não quero comprar livro React.js', 'não comprar react')
], {columns: 2}))

// BUTTONS BACK-END
const optionsNode = Extra.markup(Markup.inlineKeyboard([
  Markup.callbackButton('Quero comprar livro Node.js', 'comprar node'),
  Markup.callbackButton('Não quero comprar livro Node.js', 'não comprar node')
], {columns: 2}))

const optionsLaravel = Extra.markup(Markup.inlineKeyboard([
  Markup.callbackButton('Quero comprar livro Laravel', 'comprar laravel'),
  Markup.callbackButton('Não quero comprar livro Laravel', 'não comprar laravel')
], {columns: 2}))

const optionsAspNet = Extra.markup(Markup.inlineKeyboard([
  Markup.callbackButton('Quero comprar livro Asp.Net', 'comprar asp.net'),
  Markup.callbackButton('Não quero comprar livro Asp.Net', 'não comprar asp.net')
], {columns: 2}))
// BUTTONS MOBILE
const optionsKotlin = Extra.markup(Markup.inlineKeyboard([
  Markup.callbackButton('Quero comprar livro Kotlin', 'comprar kotlin'),
  Markup.callbackButton('Não quero comprar livro Kotlin', 'não comprar kotlin')
], {columns: 2}))



const location = Markup.keyboard([
  Markup.locationRequestButton('Enviar localização')
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
bot.hears('BACK-END',async context => {
  context.replyWithMarkdown(`Bacana Senhor! Vejamos o que temos a te oferecer no momento! 🙂`, keyboardBackEnd)

  bot.hears('NODE.JS',async (context, next) => {
	await context.replyWithMarkdown(`De que maneira quer aprender *Node.JS* Senhor?`, keyboardOptionsLearn)

    await bot.hears('DOCUMENTAÇÃO', context => {
      context.replyWithMarkdown(`Aqui está uma [documentação](https://nodejs.org/docs/latest-v11.x/api/http.html) completa da fundação *Node.JS*`)
    })

    await bot.hears('GET-STARTED', context => {
      context.replyWithMarkdown(`Que tal este [GetStarted Simples](https://nodejs.org/en/docs/guides/getting-started-guide/) OU [Contentful](https://github.com/contentful/the-example-app.nodejs)`)
    })

    await bot.hears('GITHUB', context => {
      context.replyWithMarkdown(`Um bom exemplo no [GitHub](https://github.com/heroku/node-js-sample)`)
    })

    await bot.hears('LIVROS', context => {
      context.replyWithMarkdown(`Um bom [Livro](https://drive.google.com/open?id=1-IBFIeGHhqjggIHDbpsjOr_-c_B5kTkA) para refrescar a mente Senhor!`)

    })
	  
    await bot.hears('LINKS', context => {
      context.replyWithMarkdown(`Achei este [link](https://www.airpair.com/javascript/node-js-tutorial) que possa servir como ajuda Senhor!`)
    })

    bot.hears('VÍDEOS',async context => {
      await context.replyWithMarkdown(`Este é um bom começo em vídeo aula no [YouTube](https://www.youtube.com/watch?v=LLqq6FemMNQ&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B) Senhor!`)
    })

  })

  bot.hears('LARAVEL PHP', async (context, next) => {
    await context.replyWithMarkdown(`De que maneira quer aprender *Laravel PHP* Senhor?`, keyboardOptionsLearn)

    await bot.hears('DOCUMENTAÇÃO', context => {
      context.replyWithMarkdown(`Aqui está uma [documentação](https://laravel.com/docs/6.0) completa da fundação *Laravel 6.0*`)
    })

    await bot.hears('GET-STARTED', context => {
      context.replyWithMarkdown(`Que tal este [GetStarted Simples](https://laravel.com/docs/6.0/installation/) OU [Contentful](https://github.com/contentful/contentful-laravel)`)
    })

    await bot.hears('GITHUB', context => {
      context.replyWithMarkdown(`Um bom exemplo no [GitHub](https://github.com/laravel/laravel)`)
    })

    await bot.hears('LIVROS', context => {
      context.replyWithMarkdown(`Um bom [Livro](https://drive.google.com/open?id=1Rhzvg7jLGnQeZvrYaQX0OubWcfcmOxEx) para refrescar a mente Senhor!`)
    })

    await bot.hears('LINKS',  context => {
      context.replyWithMarkdown(`Achei este [link](https://www.techiediaries.com/php-laravel-crud-mysql-tutorial/) que possa servir como ajuda Senhor!`)
    })

    bot.hears('VÍDEOS',async context => {
      await context.replyWithMarkdown(`Este é um bom começo em vídeo aula no [YouTube](https://www.youtube.com/watch?v=RBQVKTLsi8Y&list=PL8p2I9GklV45qSQg-9EhKoQiW1pYZbC8l) Senhor!`)  
    })
  
  })


  bot.hears('ASP.NET', async context => {
    await context.replyWithMarkdown(`De que maneira quer aprender *Asp.Net C#* Senhor?`, keyboardOptionsLearn)

    bot.hears('DOCUMENTAÇÃO',async context => {
      await context.replyWithMarkdown(`Aqui está uma [documentação](https://docs.microsoft.com/pt-br/aspnet/#pivot=core&panel=core_overview) completa da fundação *Microsoft ASP.NET Core*`)
    })

    bot.hears('GET-STARTED',async context => {
      await context.replyWithMarkdown(`Que tal este [GetStarted Simples](https://docs.microsoft.com/en-us/aspnet/core/getting-started/?view=aspnetcore-2.2&tabs=linux) OU [Contentful](https://github.com/contentful/contentful.net)`)
    })
  
    bot.hears('GITHUB',async context => {
      await context.replyWithMarkdown(`Um bom exemplo no [GitHub](https://github.com/aspnet/samples)`)
    })

    bot.hears('LIVROS',async context => {
      await context.replyWithMarkdown(`Um bom [Livro](https://drive.google.com/open?id=1IQR7VV1-dDpxAEecMbXDYJJjA41qulWz) para refrescar a mente Senhor!`)
    })

    bot.hears('LINKS',async context => {
      await context.replyWithMarkdown(`Achei estes links: [link1](https://hackernoon.com/asp-net-core-learn-crud-operations-in-ado-net-from-zero-to-hero-a0109ed2f8a4) & [link2](https://imasters.com.br/back-end/asp-net-core-crud-usando-blazor-e-entity-framework-core-parte-01) que possa servir como ajuda Senhor!`)
    })

    bot.hears('VÍDEOS',async context => {
      await context.replyWithMarkdown(`Este é um bom começo em vídeo aula no [YouTube](https://www.youtube.com/watch?v=Z3DU-Jpft74&list=PLXik_5Br-zO-5SRVrpNHnP4uVMBL2Gqz2) Senhor!`)
    })

  })


})


// ***** FRONT END ******
bot.hears('FRONT-END',async context => {
  await context.replyWithMarkdown(`Legal Senhor! Querer algo mais leve é sempre bom, qual seria a tecnologia?`, keyboardFrontEnd)
	
	bot.hears('VUE.JS',async context => {
	  await context.replyWithMarkdown(`De que maneira quer aprender *Vue.JS* Senhor?`, keyboardOptionsLearn)


	  bot.hears('DOCUMENTAÇÃO',async context => {
	    await context.replyWithMarkdown(`Aqui está uma [documentação](https://br.vuejs.org/v2/guide/index.html) completa da fundação *Vue.JS*`)
	  })

	  bot.hears('GET-STARTED',async context => {
	    await context.replyWithMarkdown(`Que tal este [GetStarted Simples](https://br.vuejs.org/v2/guide/installation.html) OU [Contentful](https://www.contentful.com/developers/docs/javascript/tutorials/integrate-contentful-with-vue-and-nuxt/)`)
	  })

	  bot.hears('GITHUB',async context => {
	    await context.replyWithMarkdown(`Um bom exemplo no [GitHub](https://github.com/gothinkster/vue-realworld-example-app)`)
	  })

	  bot.hears('LINKS',async context => {
	    await context.replyWithMarkdown(`Achei estes links: [link1](https://medium.mybridge.co/45-amazing-vue-js-open-source-for-the-past-year-v-2019-b8533f26a0a2) & [link2](https://www.taniarascia.com/getting-started-with-vue/) que possa servir como ajuda Senhor!`)
	  })
	  
	  bot.hears('VÍDEOS',async context => {
	    await context.replyWithMarkdown(`Este é um bom começo em vídeo aula no [YouTube](https://www.youtube.com/watch?v=07-TvnH7XNo&list=PLcoYAcR89n-qq1vGRbaUiV6Q9puy0qigW) Senhor!`)
	  })

	  bot.hears('LIVROS',async context => {
	    await context.replyWithMarkdown(`Infelizmente não temos nenhum livro Senhor! 😔 \nDeseja comprar algum?`, optionsVue)

	    bot.action('não comprar vue',async context => {
	      await context.replyWithMarkdown('Tudo bem, vamos tentar aprender de outra forma!', keyboardOptionsLearn)
	    })

	    bot.action('comprar vue',async context => {
	      await context.reply('Bacana! Podemos acessar [Casa Do Código](https://www.casadocodigo.com.br/products/livro-frontend-vue?_pos=2&_sid=3652f3a1d&_ss=r) e ver se te agradar Senhor', keyboardOptionsLearn)
	      await context.reply('Também tem a opção de procurarmos em alguma livraria ou biblioteca aqui por perto, é só enviar sua localização Senhor!', location)
	    })

		bot.on('location', async context => {
		  try {
		    const url = 'http://api.openweathermap.org/data/2.5/weather'
		    const { latitude: lat, longitude: lon } = context.message.location

		    const res = await axios.get(`${url}?lat=${lat}&lon=${lon}&APPID=${env.weathermapAPIkey}&units=metric`)
		    await context.reply(`Senhor! Você está em ${res.data.name} ${res.data.country}`)
		  	await context.reply(`A temperatura por aí está por volta de seus ${res.data.main.temp}ºC`)
		  	await context.reply(`De acordo com sua localização nós temos a Livraria Saraiva, deseja saber a distância até lá?`, buttons)

		  } catch(e) {
			context.reply('Não consigo obter sua localização Senhor! Espero que esteja ainda no planeta Terra')
		  }	
		})
	  })

	})


  bot.hears('REACT.JS',async context => {
    await context.replyWithMarkdown(`De que maneira quer aprender *React.JS* Senhor?`, keyboardOptionsLearn)

	bot.hears('DOCUMENTAÇÃO',async context => {
	  await context.replyWithMarkdown(`Aqui está uma [documentação](https://pt-br.reactjs.org/docs/getting-started.html) completa da fundação *React.JS*`)
	})

	bot.hears('GET-STARTED',async context => {
	  await context.replyWithMarkdown(`Que tal este [GetStarted Simples](https://pt-br.reactjs.org/docs/create-a-new-react-app.html) OU [Contentful](https://www.contentful.com/blog/2019/02/18/how-build-react-redux-app/)`)
	})

	bot.hears('GITHUB',async context => {
	  await context.replyWithMarkdown(`Um bom exemplo no [GitHub](https://github.com/edoko/react-redux-crud-example)`)
	})

	bot.hears('LIVROS',async context => {
	  await context.replyWithMarkdown(`Infelizmente não temos nenhum livro Senhor! 😔 \nDeseja comprar algum?`, optionsReact)
	  bot.action('não comprar react',async context => {
	    await context.replyWithMarkdown('Tudo bem, vamos tentar aprender de outra forma!', keyboardOptionsLearn)
	  })

	  bot.action('comprar react',async context => {
	    await context.reply('Bacana! Podemos acessar [Casa Do Código](https://www.casadocodigo.com.br/products/livro-pwa?_pos=1&_sid=7ac361db2&_ss=r) e ver se te agradar Senhor', keyboardOptionsLearn)
	    await context.reply('Também tem a opção de procurarmos em alguma livraria ou biblioteca aqui por perto, é só enviar sua localização Senhor!', location)
	  })

	  bot.on('location', async context => {
	    try {
	      const url = 'http://api.openweathermap.org/data/2.5/weather'
	      const { latitude: lat, longitude: lon } = context.message.location

	      const res = await axios.get(`${url}?lat=${lat}&lon=${lon}&APPID=${env.weathermapAPIkey}&units=metric`)
	      await context.reply(`Senhor! Você está em ${res.data.name} ${res.data.country}`)
	      await context.reply(`A temperatura por aí está por volta de seus ${res.data.main.temp}ºC`)
		  await context.reply(`De acordo com sua localização nós temos a Livraria Saraiva, deseja saber a distância até lá?`, buttons)

		} catch(e) {
			context.reply('Não consigo obter sua localização Senhor! Espero que esteja ainda no planeta Terra')
		}	
      })
	})

	bot.hears('LINKS',async context => {
	  await context.replyWithMarkdown(`Achei estes links: [link1](https://medium.com/@cakiran/react-crud-app-without-and-with-redux-da4cd87f2eab) & [link2](https://blog.tecsinapse.com.br/utilizando-react-redux-firebase-2bf93ea9f422) que possa servir como ajuda Senhor!`)
	})

	bot.hears('VÍDEOS',async context => {
	  await context.replyWithMarkdown(`Este é um bom começo em vídeo aula no [YouTube](https://www.youtube.com/watch?v=0k3czp6O-qg&list=PLXe1Uv1JGlTbrdrcZIZOabEBSpeNeVHD7) Senhor!`)
	})

  })

  bot.hears('ANGULAR.JS',async context => {
    await context.replyWithMarkdown(`Deseja continuar com *Angular.JS* Senhor?`, keyboardOptionsLearn)

    bot.hears('DOCUMENTAÇÃO',async context => {
      await context.replyWithMarkdown(`Aqui está uma [documentação](https://angular.io/docs) completa da fundação *Angular.JS*`)
    })

    bot.hears('GET-STARTED',async context => {
      await context.replyWithMarkdown(`Que tal este [GetStarted Simples](https://angular.io/start) OU [Contentful](https://www.contentful.com/developers/docs/javascript/tutorials/using-contentful-in-an-angular-project/)`)
    })

    bot.hears('GITHUB',async context => {
      await context.replyWithMarkdown(`Um bom exemplo no [GitHub](https://github.com/angular/quickstart)`)
    })

    bot.hears('LIVROS',async context => {
      await context.replyWithMarkdown(`Infelizmente não temos nenhum livro Senhor! 😔 \nDeseja comprar algum?`, optionsAngular)
    })

    bot.action('não comprar angular',async context => {
      await context.replyWithMarkdown('Tudo bem, vamos tentar aprender de outra forma!', keyboardOptionsLearn)
    })

    bot.action('comprar angular', async context => {
      await context.reply('Bacana! Podemos acessar [Casa Do Código](https://www.casadocodigo.com.br/products/livro-angular?_pos=1&_sid=4986e8b1a&_ss=r) e ver se te agradar Senhor', keyboardOptionsLearn)
      await context.reply('Também tem a opção de procurarmos em alguma livraria ou biblioteca aqui por perto', location)
    })

    bot.on('location', async context => {
	  try {
	    const url = 'http://api.openweathermap.org/data/2.5/weather'
	    const { latitude: lat, longitude: lon } = context.message.location

	    const res = await axios.get(`${url}?lat=${lat}&lon=${lon}&APPID=${env.weathermapAPIkey}&units=metric`)
	    await context.reply(`Senhor! Você está em ${res.data.name} ${res.data.country}`)
	    await context.reply(`A temperatura por aí está por volta de seus ${res.data.main.temp}ºC`)
	    await context.reply(`De acordo com sua localização nós temos a Livraria Saraiva, deseja saber a distância até lá?`, buttons)

	  } catch(e) {
		context.reply('Não consigo obter sua localização Senhor! Espero que esteja ainda no planeta Terra')
	  }	
    })

    bot.hears('LINKS', async context => {
      await context.replyWithMarkdown(`Achei estes links: [link1](https://www.devglan.com/angular/angular-7-crud-example) - [link2](https://medium.com/@andrewchanm/criando-um-app-angular-7-e-consumindo-uma-api-rest-1-de-3-7169d90ed8c1) - [link3](https://appdividend.com/2018/11/04/angular-7-crud-example-mean-stack-tutorial/) que possa servir como ajuda Senhor!`)
    })

    bot.hears('VÍDEOS', async context => {
      await context.replyWithMarkdown(`Este é um bom começo em vídeo aula no [YouTube](https://www.youtube.com/watch?v=7yGHRoLkI30&list=PLK7sa90aSLe7RW_7qotGlmBxMtm-jajCG) Senhor!`)
    })

  
  })

})



// ***** DEV OPS ******
bot.hears('DEV-OPS', async context => {
  context.replyWithMarkdown(`Ok Senhor! Qual ferramenta para Desenvolvimento ágil de Software iremos estudar?`, keyboardDevOps)	
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