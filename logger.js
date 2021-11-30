const EventEmitter = require('events')
const fs = require('fs')
const path = require('path')

const emitter = new EventEmitter() //instanciando um novo obejto da classe EventEmitter

emitter.on('log', (message) => {    //se "escutar" a palavra desejada executa a função
    fs.appendFile( path.join(__dirname, 'log.txt') , message, err => {
        if (err) throw err
    } )
    //console.log(message)
})

function log(message){
    emitter.emit('log', message)
}



module.exports = log //criando um modulo