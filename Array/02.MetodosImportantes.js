const pilotos = [1,2,3,4,5,6,7,8]

//Retirar o ultimo elemento
pilotos.pop()
console.log('pop:',pilotos)

//Adicionar ultimo elemento
pilotos.push(8)
console.log('push:',pilotos)

//Retira da primeira posição
pilotos.shift()
console.log('shift',pilotos)

//Adicionar na primeira posição
pilotos.unshift(1)
console.log('unshift',pilotos)

//Adicionar e remover elementos de um array com splice
pilotos.splice(0,1,'First')
console.log(pilotos)

//retornar um novo array com slice
const sequencia = pilotos.slice(1,3) //do 1 até o 3 sem pegar o 3
console.log(sequencia)