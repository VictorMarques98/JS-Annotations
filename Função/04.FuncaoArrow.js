//Tem dois objetivos = ser mais curta e não alterar o this

let dobro = function (a)
{ return 2*a}

dobro = a => { //arrow sempre é função anonima, por isso deve-se agrega-la em uma const
    return 2*a //Caso se coloque o bloco, é obrigatório o return, senão, function dara undefined
}

dobro = a => 2 * a //versão simplificada com return implicito
console.log(dobro(2))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' //Sem parametros
console.log(ola())

//Exemplo 2
console.log('Exemplo 2-------')

function Pessoa()
{
    this.idade = 0
    setInterval(() => {
        this.idade++ //Esse this vai funcionar, pois ele está no contexto léxico da function Pessoa
        console.log(this.idade)
    },1000)
}
// new Pessoa


//Exemplo 3
console.log('Exemplo 3 -------------------')

let comparaComThis = function (param)
{
    console.log(this === param)
}
comparaComThis(global) //True

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //false, pois this está referenciando objeto
comparaComThis(obj)

//com arrow function
let comparaThis = param => console.log(this === param) //cada arquivo representa um módulo
comparaThis(global) //false, pois this está no contexto da arrow

comparaThis(global)//false para arrow function
comparaComThis(global)//false para function tradicional
comparaThis(module.exports) //true, pois module === this
comparaComThis(module.exports)//false, pois esse this está em coutro contexto


