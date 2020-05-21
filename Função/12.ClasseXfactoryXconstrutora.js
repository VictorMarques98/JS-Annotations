//criando classe
class Pessoa {
    constructor(nome) {
        this.nome = nome //variavel nome passou a ser publica
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João') //instanciar
p1.falar()

//Função factory
const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome è ${nome}`)
    }
}

const p2 = pessoa('João')
p2.falar()

//Função construtora
function pessoacriar(nome)
{
    this.nome = nome
    this.falar = function()
    {
        console.log(`Meu nome é ${nome}`)
    }
}

const p4 = new pessoacriar('João')
p4.falar()
console.log(p4.nome) //tem acesso ao nome