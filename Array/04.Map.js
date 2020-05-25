//Map cria um novo array com dados transformados
//O map retorna um novo array DO MESMO TAMANHO

let array = [1,2,3]

let novoArray = array.map(e => e+1) //tem que haver retorno
console.log(novoArray)

//Desafio MAP

const carrinho = [
    '{"nome":"Borracha","preco":"3.45"}',
    '{"nome":"lapis","preco":"2.95"}',
    '{"nome":"caderno","preco":"10.00"}',
]

let preco = carrinho.map(e => {return JSON.parse(e).preco})

//Criando Map
Array.prototype.array2 = function()
{
    let array =[]
    for(let cont = 0;cont<this.length;cont++)
    {
        array.push(this[cont]*2)
    }
    return array
}

console.log(array.array2())

