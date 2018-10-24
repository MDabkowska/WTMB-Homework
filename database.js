const fs = require('fs')
module.exports = {
    save(data) {
        // console.log(data)
        fs.writeFileSync('data.json')
    }
}