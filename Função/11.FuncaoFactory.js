//Função factory = retorna objeto

const prod1 = {
    nome: 'nome',
    preco: 'preco',
}

//Factory Simples = sempre retorna um objeto
function criarPessoa()
{
    return { //retorna um objeto
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa()) //criação de objeto = fabricar objeto

//Exemplo2--------------
console.log('Exemplo 2 ---------')

function criarPorduto(nome,preco = 1200)
{
    return {
        nome,
        preco
    }
}
console.log(criarPorduto('notebook',1234))
console.log(criarPorduto('celular'))