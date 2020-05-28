const contadorA = require('./08.InstanciaUnica')
const contadorB = require('./08.InstanciaUnica')
const contadorC = require('./09.InstanciaNova')() //retorna um objeto, pois estou retornando uma função factory
const contadorD = require('./09.InstanciaNova')()

//Fez cache
contadorA.inc()
contadorA.inc()
console.log(contadorB.valor,contadorA.valor)

//Não faz cache
contadorC.inc()
contadorC.inc()
console.log(contadorD.valor,contadorC.valor)
