const nome = 'Rebeca'
const concatenar = 'Olá ' + nome + '!'

//Usando Template String (considera quebra de linha)
const template = `
Olá 
${nome}!`

//expressões
console.log(`1+1=${1+1}`)

console.log(concatenar,template)

//Chamar função dentro de template string. Não esquecer o DÓLAR (5.60)
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)

