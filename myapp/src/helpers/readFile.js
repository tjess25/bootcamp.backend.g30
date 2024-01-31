const fs = require('fs')

async function readFile(path = './src/lib/db.json') {
    return new Promise((resolve, reject) => {
        fs.readFile('./src/lib/db.json', 'utf8', (err, data) => {
            if (err) reject(err)
            resolve(JSON.parse(data))
        })
    })
}

module.exports = readFile