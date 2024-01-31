const fs = require('fs')

async function readFile(path = './src/utils/db.json') {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                console.log(err)
                reject(err)
            }
            resolve(JSON.parse(data))
        })
    })
}

module.exports = readFile