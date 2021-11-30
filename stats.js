const os = require('os') // pegando um modulo já existente
const log = require('./logger') // chamando o modulo criado


/*
const freemem = os.freemem
const totalmem = os.totalmem
*/
// Posoo fazer assim:
// const { freemem , totalmem } = os


// primeiro parâmetro é a função que ela vai executar e o segundo parâmetro é o quanto em quanto tempo vai executar a função (ex: 1 em 1 segundo)
setInterval( () => {  

    const { freemem , totalmem } = os

    const total = parseInt(totalmem() /1024 /1024 )
    const mem = parseInt(freemem() /1024 /1024 )
    const percents = parseInt((mem/total)*100)


    //Criar um objeto para formatar os parâmetros
    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents}%`
    }

    console.clear() //limpar o terminal
    console.log("\n  ----- PC STATS -----\n")   //Impressão normal
    console.table(stats)   //Impressão de tabela

    log(`${JSON.stringify(stats)}\n`)

}, 1000 )

