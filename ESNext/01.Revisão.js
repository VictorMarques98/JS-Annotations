//Let e const
{
    var a = 2 //a tem escopo global e de função
    let b = 3 //b tem escopo de bloco,função e global
}
console.log(a)
// console.log(b)//b n imprime

//Template String = possibilidade de imprimir string em quebra de linha
const produto = 'ipad'
console.log(`${produto} 
eh caro`)

//Destructuring = desestruturar
const [i,e, ...tras] = "Cod3r"
console.log(i,e,tras)// C = i,e = o,...tras = d 3 r

//Desestruturar um array
const[x,y] = [1,2]
console.log(x,y)
//ou
const [d,,b] = [1,2,3]
console.log(d,b)
//ou desestruturar obj
const {age,name} = {age:16,name:'Victor'}
console.log(age,name)

//Arrow function
const soma = (a,b) => a + b
console.log(soma(1,2))

//this da função arrow = não varia
const lexico = () => console.log(this === exports) //this === module.exports
lexico()

//parametro default
function log(texto = 'node')
{
    console.log(texto)
}
log()

//Operador rest = agrupar. Colocar varios parametros variados que serão agrupados no array
function total(...numeros) //receber um conjunto de numeros.
{
    // ...numeros = retorna um array com todos os elementos
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5,6))

//Object values/Objec.entries
console.log('Object.values / Object.entries')
const obj = {a:1,b:3,c:2}
console.log(Object.values(obj))
console.log(Object.entries(obj)) //matriz com chave valor

//Melhorias na notação literal = criação de atributo e function
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'Ola'
    }
}
console.log(pessoa.nome,pessoa.ola())



