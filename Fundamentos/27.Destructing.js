//Tirar um atributo de um objeto
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro:'Rua Abc',
        numero: 100
    }
}

//Tire o nome e idade do objeto pessoa
const {nome,idade} = pessoa
console.log(nome,idade)

//Renomear e tirar da estrutura
const { nome: n, idade: i } = pessoa //variavel com nome n e idade i
console.log(n,i)

const { sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome,bemHumorado) //undefined , true, pois bemHumorado retorna true se não estã definido

const { endereco: {logradouro, numero}} = pessoa
console.log(logradouro,numero)

//Desestruturação em ARRAY
const [a] = [10]
console.log(a) //10

const [n1, ,n3,n4,n5 = 0] =[1,2,3]
console.log(n1,n3,n4)

const [,[,nota]] = [[,8,8],[9,6,8]]
console.log(nota)

//Desestruturação em function
function random ({ min = 0, max = 1000})//aqui esta usando destructing
{
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(random({max:50,min:40}))//aqui esta usando objeto
console.log(random({min:955}))
console.log(random({})) //vai gerar numero entre 0 e 1000

//Desestruturação de array com function
function rand([min = 0, max = 1000])
{
    if(min > max) [min,max] = [max,min]//Desestruturados do array
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand([50,40]))//Aqui não está se explicitando o valor max e min
console.log(rand([992])) //992 = min, de acordo com a ordem, e max vai assumir 1000
console.log(rand([])) //vai nos valores padrões

