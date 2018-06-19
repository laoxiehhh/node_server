const url = require('url')

class Eps {
  constructor () {
    this._routers = []
  }
  use (reqPath, fn) {
    this._routers.push({
      path: reqPath,
      fn: fn
    })
  }
  handle (req, res) {
    let cnt = 0
    parseUrl(req, res)
    while (true) {
      let layer = this._routers[cnt++]
      if (!layer) {
        return false
      }
      if (req.pathname === layer.path) {
        layer.fn(req, res)
        return true
      }
    }
  }
}

function parseUrl (req, res) {
  let obj = url.parse(req.url, true);
  obj = obj || {}
  req.pathname = obj.pathname
  req.query = obj.query
}

module.exports = Eps