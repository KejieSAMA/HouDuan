const Koa = require('koa');

const userLogin = require('./router/login')

const app = new Koa();

app.use(userLogin.routes()).use(userLogin.allowedMethods())

module.exports = app

/* const fs = require('fs')
module.exports = (app) => {
    // 读取当前目录下所有文件
    fs.readdirSync(__dirname).forEach(file => {
        console.log('1')
        // 除去 `index.js` 文件外其他的都要注册到 `app` 中
        if (file === 'index.js') return
        const router = require(`./${file}`)
        console.log(router)
        app.use(router.routes()).use(router.allowedMethods())
    })
} */