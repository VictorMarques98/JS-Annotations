//NPM I NODE SCHEDULE = temporizador do node.js

const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 *14 * * 4',function () //exec de 5 em 5 seg
{
    console.log('Executando tarefa 1',new Date().getSeconds())
})

//cancelar temporizador
setTimeout(function()
{
    tarefa1.cancel()
    console.log('Cancelando tarefa 1')
})
