//função construtora = "molde" para criação de objeto

function carro (velocidadeMaxima = 200, delta = 5)
{
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function()
    {
        if(velocidadeAtual + delta <= velocidadeMaxima)
        {
            velocidadeAtual += delta
        }
        else
        {
            velocidadeAtual = velocidadeMaxima
        }

        //metodo publico
        this.getvelocidadeAtual = function ()
        {
            return velocidadeAtual
        }
    }
}

//instanciar um objeto
const uno = new carro //como não coloquei parametros, ele pegara valor padrão da function
uno.acelerar()
console.log(uno.getvelocidadeAtual())

const ferrari = new carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())