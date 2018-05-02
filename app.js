import Koa from 'koa'
import Router from 'koa-router'
import routes from './routes'
import cors from 'koa-cors'
const app = new Koa()
const router = Router()
// app.use(async(ctx, next)=>{
//     console.log(ctx.get('origin'))
//     ctx.set('Access-Control-Allow-Methods', "GET,POST,DELETE,PUT");
//     ctx.set("Access-Control-Allow-Origin",ctx.get('origin'))
//     await next()
// })
//  app.use(cors())
router.use('/', routes.routes())
app.use(router.routes())
app.listen(3003,()=>{
    console.log('server listening on port localhost:3003')
})