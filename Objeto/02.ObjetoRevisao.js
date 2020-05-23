//Obj = coleção dinamica de pares chave/valor

const produto = new Object //função construtora pra instanciar obj
produto.nome = 'Cadeira'
produto.marca = 'Generica'
produto.preo = 220

console.log(produto)

//deletar atributos
delete produto.preco
delete produto.marca

const carro =
    {
        marca: 'Audi',
        ano: 1995,
        proprietario:
        {
            nome: 'Victor',
            idade: 22,
            endereco:
            {
                rua: 'abc',
                numero: 123,
            }
        },
        condutores:
        [
            {
                nome:'Junior',
                idade: 19
            },
            {
                nome:'Ana',
                idade:34
            }
        ],
        calcularValorSeguro(){}
    }

//acessar atributos
// console.log(carro)
console.log(carro.marca)
console.log(carro.proprietario.nome)
delete carro.condutores
console.log(carro)
console.log(carro.condutores) //undefined
