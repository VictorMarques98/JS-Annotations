const pessoa = {
    nome:'Rebeca',
    idade: 12,
    peso:45
}

console.log(Object.keys(pessoa)) // Object.keys = imprimir todas as chaves de certo OBJ
console.log(Object.values(pessoa)) // Object.values = imprimir todos os valores de certo OBJ
console.log(Object.entries(pessoa)) //vai retornar um array com conjunto chave valor

//Percorrer Array
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}:${e[1]}`)
})

//definir caracteristicas para uma propriedade
Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: false, //Se chave de objeto vai ser listada (ex. object.keys)
    writable: false, //n vai ser alterada
    value: '01/02/1999'
})

pessoa.dataNascimento = '01/01/197'
console.log(Object.keys(pessoa))
console.log(pessoa.dataNascimento)

//Object.assign = associar
const dest = { a: 1}
const o1 = { b: 2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest,o1,o2) //Valor será sobrescrito (concatenação)
console.log(obj)
