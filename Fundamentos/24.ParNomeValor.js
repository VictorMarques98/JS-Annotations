//par nome/valor
const saudacao = 'Opa' //contexto léxico 1 (local fisica no qual sua variavel foi definido)

function exec(){
    const saudacao = 'Fala' //contexto léxico 2
    return saudacao
}
//como estão em contextos diferentes, não haverá conflito

//Objetos são grupos aninhados de chave/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90
}

console.log(saudacao)
console.log(exec())
console.log(cliente) //resultados se devem ao escopo global e específico 
