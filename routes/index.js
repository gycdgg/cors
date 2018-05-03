var router = require('koa-router')();

router.get('/cors', async function (ctx, next) {
    ctx.body = {
        body: 'this is a test'
    }
})

router.get('/jsonp', async function (ctx, next) {
    console.log('1111',ctx.query)
    let callback = ctx.query.callback
    const resStr = "this is jsonP response"
    ctx.type = "text/javascript"
    ctx.body = `${callback}(${JSON.stringify(resStr)})`
})

export default router
