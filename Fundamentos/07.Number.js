const peso1 = 1.0
//ou
const peso2 = Number('2.2')
console.log(peso1,peso2)

//Realizando alguns testes...
console.log(Number.isInteger(peso1)) //Tipo number serve para inteiro e quebrado, por isso do TRUE
console.log(Number.isInteger(peso2))//false

const av1 = 9.871
const av2 = 6.871
const total = av1 * peso1 + av2 * peso2
const media = total / (peso1+peso2)
console.log(media)

//Ajustar a quantidade de casa decimais com toFixed()
console.log(media.toFixed(2))

//Converter valor numérico em string, no caso (2) para binário
console.log(media.toString(2))

//Tipo da variável MEDIA
console.log(typeof media) //number

//O que é o Number
console.log(typeof Number) //function

//ALGUNS CUIDADOS COM NUMBERS----------------------------

console.log(7/0)//Infinity

//Js verifica conteudo interno da string e verifica se pode ser convertido para valor numérico
console.log("10"/2)

//Conversão de string errada
console.log("show"/2)//NaN

//Operações com ponto flutuante, imprecisão
console.log(0.1 + 0.7)//0.79999999





