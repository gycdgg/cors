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

router.get('/cache', async function(ctx, next){
    let date = new Date()
    console.log(ctx.request.header["if-none-match"])
    if(ctx.request.header["if-none-match"] === "1234"){
        ctx.status = 304
    }else{
        ctx.set({
            "cache-control":" max-age= 20,public",
            'Etag': '1234'
        })
        //ctx.set('Last-Modified', date);
        ctx.lastModified = date
        ctx.body = "this is a cache data"
    }
})

export default router
