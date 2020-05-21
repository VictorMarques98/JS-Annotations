//Classe define as caractericas do obj, porém cada obj vai ter valores diferentes
//This é o objeto que está referenciando o 'dono', no caso do browser, this === window
//Com arrow function o this não varia
//Function tradicional pode fazer o this variar
//This é definido no contexto da function

const pessoa = {
    saudacao: 'Bom dia',
    falar()
    {
     console.log(this.saudacao)//Acessar saudacao do objeto dono da função no caso pessoa
        // console.log(saudacao) irá gerar um erro
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //Conflito entre paradgimas: funcional e OO, pois falar esta em outro contexto

//O que posso fazer
const falarDePessoa = pessoa.falar.bind(pessoa)//Bind passa objeto no qual você deseja que seja resolvido o this
//this vai ser constante pessoa a partir de agora, e bind não vai alterar a função original (falar)
falarDePessoa()

//This&Bind2
console.log('this e bind 2')

function Pessoa()
{
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this),1000) //Sem o bind, this aponta para outro contexto o que gera NaN
}

// new Pessoa

//Outra possibilidade
function Pessoa1()
    {
        this.idade = 0
        const self = this //criar constante para trava-lo
        setInterval(function () { //Se tivesse um this aqui, n precisaria do self
            self.idade++
            console.log(self.idade)
        },1000)
    }

    new Pessoa1