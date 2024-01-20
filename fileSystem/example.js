const fs = require('fs')

const path = process.argv[2]


fs.writeFile('./example.txt', 'Hola Koders!!!!!', (err) => {
    if (err) throw new Error("No se puede crear el archivo") 
    // if (err) {
    //    throw err
    //}
    console.log("Archivo creado correctamente")
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) throw new Error("No se puede leer el archivo")
        console.log(data);
        fs.appendFile('./example.txt', ` actualizado el ${new Date()}`, (err) => {
            if (err) throw new Error("No se puede actualizar el archivo")
            console.log("Archivo actualizado")
            fs.readFile('./example.txt', 'utf-8', (err, data) => {
                if (err) throw new Error("No se puede leer el archivo")
                console.log(data)
                fs.unlink('./example.txt', (err) => {
                    if (err) throw new Error("No se puede eliminar el archivo")
                    console.log("Archivo eliminado")
                })
            })
        })
    })
})

/*fs.readFile('./example.txt', 'utf-8', (err, data) => {
    if (err) throw new Error("No se puede leer el archivo")
    console.log(data)
})
                                //'actualizado el' + new Date()
fs.appendFile('./example.txt', ` actualizado el ${new Date()}`, (err) => {
    if (err) throw new Error("No se puede actualizar el archivo")
    console.log("Archivo actualizado")
    fs.readFile('./example.txt', 'utf-8', (err, data) => {
        if (err) throw new Error("No se puede leer el archivo")
        console.log(data)
    })
})

fs.unlink('./example.txt', (err) => {
    if (err) throw new Error("No se puede eliminar el archivo")
    console.log("Archivo eliminado")
})*/

/**
 * 1) crear el archivo
 * 2) actualiza el archivo
 * 3) elimina el archivo
 * 4) imprime en consola "Archivo eliminado"
 * 5) imprime en consola "Archivo actualizado"
 * 6) imprime en consola "Archivo creado"
 * 7) lee el archivo --> se genera error
 */