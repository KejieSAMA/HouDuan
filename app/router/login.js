const Router = require("koa-router")
const router = new Router({
    prefix: '/users'
})
//开始登录
router.get("/login", (ctx,next) => {
    ctx.body = 'hello login!';
    console.log('running api => /users/login')
})
module.exports = router;