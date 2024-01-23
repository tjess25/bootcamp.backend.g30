const fs = require('fs')
/*function getUsers() {
    setTimeout(() => {
        return users
    }, 3000);
}*/

/*const getUsers = new Promise((resolve, reject) => {
    const users = [
        {
            "user":"users1",
            "password":"nduiwh68tgyu",
            "email":"mail@mail.com",
        },
        {
            "user":"users2",
            "password":"nduiwh68tgyu",
            "email":"mail2@mail.com",
        },
        {
            "user":"users3",
            "password":"nduiwh68tgyu",
            "email":"mail3@mail.com",
        }  
    ]
    setTimeout(() => {
        resolve(users) 
    }, 3000);    
})

getUsers.then((users) => {
    console.log(users)
}).catch((err) => {
    console.error(err)
}).finally(() => {
    console.log("Estoy dentro de la promesa")
})

console.log("Estoy a fuera de la promesa")*/

/*let mkdir = new Promise((resolve, reject) => {
    fs.mkdir('./newFolder', (err) => {
        if (err) reject(err) 
        resolve("Folfer creado correctamente");
    })
})

let createHTML = new Promise((resolve, reject) => {
    fs.writeFile("index.html", "", (err)=> {
        if (err) reject(err) 
        resolve("index creado correctamente");
    })
})*/

/*createDir.then((msg) => {
    console.log(msg)
}).catch((err) => {
    throw err
}).finally(createHTML)*/

async function getUsers() {
    const users = [
        {
            "user":"users1",
            "password":"nduiwh68tgyu",
            "email":"mail@mail.com",
        },
        {
            "user":"users2",
            "password":"nduiwh68tgyu",
            "email":"mail2@mail.com",
        },
        {
            "user":"users3",
            "password":"nduiwh68tgyu",
            "email":"mail3@mail.com",
        }  
    ]
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(users)  
        }, 3000); 
    })
    
}

async function logUsers() {
    let users = await getUsers()
    console.log(users)
}

logUsers()







