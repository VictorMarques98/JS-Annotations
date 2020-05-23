const a = 1
const b = 2
const c = 3

const obj1 = {a, b, c}
console.log(obj1)

//Criar atributo a partir de nome variavel
const nomeAttr = 'nota'
const valorAttr = 7.87

const obj4 = {[nomeAttr]:valorAttr}
console.log(obj4)

//Colocando function em obj
const obj3 = {
    funcao2 () {}
}
console.log(obj3)