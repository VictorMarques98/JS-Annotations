//Par de chaves é forma literal de criar objeto
//Objeto é uma coleção de chave valor

const prod1 = {} //Criação de objeto
//Forma de adicionar chave e valor no objeto
prod1.nome = 'celular'
prod1.preco = 5.000
prod1['aparelho'] = 'Samsung'

console.log(prod1)

//Outra forma
const prod2 = {
    nome: 'Camisa',
    preco: 89.90,
    obj: {
        blabla: 1,
        obj: {
            blabla:2
        }
    }
}

console.log(prod2)