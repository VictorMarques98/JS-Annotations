let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//Valor Numérico para booleano
isAtivo = 1
console.log(!!isAtivo) //isAtivo é vdd? = true
console.log(!!true) //Não Não True = true
console.log(!true) //Não true = false

//Os verdadeiros (todos numeros inteiros)
console.log('Os verdadeiros...')
console.log(!!3) //Usar sempre 2 !! para verificar se é vdd
console.log(!!-3)
console.log(!!' ')//String com espaço dentro
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

//Os falsos
console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar...')
console.log(!!('' || null || 0 || " "))//true
//retornar o valor verdadeiro
console.log('' || null || 0 || 'ola')

//Exemplo prático
let nome = ''
console.log(nome || 'Desconhecido') //Desconhecido



