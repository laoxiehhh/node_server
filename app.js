const http = require('http')
const fs =require('fs')
const url = require('url')
const Eps = require('./lib/eps')

const formRouter = require('./routers/form.js');
const apiRouter = require('./routers/api.js');
const indexRouter = require('./routers/index.js');
const baiduRouter = require('./routers/baidu.js');
const taobaoRouter = require('./routers/taobao.js');

let app = new Eps()
app.use('/', indexRouter)
app.use('/taobao', taobaoRouter);
app.use('/baidu', baiduRouter);
app.use('/form', formRouter);
app.use('/api', apiRouter);

const server = http.createServer(function (req, res) {
  if (app.handle(req, res)) {
    return
  }
  res.statusCode = 404
  res.end('404')
})

server.listen(3000)
console.log('server is running')