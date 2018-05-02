import Koa from 'koa'
import Router from 'koa-router'
import Static from "koa-static"
import path from 'path'
const app = new Koa()
app.use(Static(path.join(__dirname)));
app.listen(3002,()=>{
    console.log('server listening on port localhost:3003')
})