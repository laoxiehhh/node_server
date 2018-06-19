const fs = require('fs')
const path = require('path')

function render (viewFile, res) {
  fs.createReadStream(path.join(__dirname, '../views/', viewFile), 'utf8')
    .pipe(res)
}

module.exports = render