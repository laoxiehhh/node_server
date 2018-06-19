var querystring = require('querystring')
module.exports = function (req, res) {
  let data = []
  req.on('data', function (chunk) {
    data.push(chunk)
  }).on('end', function () {
    if (req.method === 'POST') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      data = Buffer.concat(data).toString();
      data = querystring.parse(data)
      if (data.username === 'xiexuandong' && data.password === 'zxcasd') {
        res.end(data.username + ' login success')        
      } else {
        res.end('login fail...')
      }
    }
  })
}