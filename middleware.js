const exec = (context, ...middlewares) => {
  const run = index => {
  	middlewares && index < middlewares.length &&
  	  middlewares[index](context, () => run(index + 1))
  }
  run(0)
}

const middleware1 = (context, next) => {
	context.info1 = 'mid1'
	next()
}

const middleware2 = (context, next) => {
	context.info2 = 'mid2'
	next()
}

const middleware3 = context => context.info3 = 'mid3'

const context = {}

exec(context, middleware1, middleware2, middleware3)
console.log(context)