const render = require('../lib/render')
module.exports = function (req, res) {
  render('index.html', res)
}