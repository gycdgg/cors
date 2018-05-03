import Koa from 'koa'
import Router from 'koa-router'
import routes from './routes'
import cors from 'koa-cors'
import Static from "koa-static"
import path from 'path'

const app = new Koa()
const router = Router()
//  app.use(cors())
/**
 * cors()中间件的本质就是设置允许跨域的方法和跨域允许的origin
 * 以下是简单实现
 */
// app.use(async(ctx, next)=>{
//     console.log(ctx.get('origin'))
//     ctx.set('Access-Control-Allow-Methods', "GET,POST,DELETE,PUT");
//     ctx.set("Access-Control-Allow-Origin",ctx.get('origin'))
//     await next()
// })
app.use(Static(path.join(__dirname)))
app.use(async(ctx,next)=>{
    await next()
    console.log(`request detail ${ctx.originalUrl} method: ${ctx.method} type:${ctx.type}`)
})
router.use('/api', routes.routes())
app.use(router.routes())
app.listen(3003,()=>{
    console.log('backend server listening on port http://localhost:3003')
})