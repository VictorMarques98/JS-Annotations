//Função anonima = sem nome

const soma = function (x,y)
{
    return x + y
}

const imprimir = function (a,b,operacao = soma)
{
    console.log(operacao(a,b))
}

imprimir(3,4)
imprimir(3,4,soma)
imprimir(3,4,function (x,y) { //passar function como parametro
    return x - y
})
imprimir(3,4,(x,y) => x * y) //arrow como parametro

//Function anonima dentro de objeto
const pessoa = {
    falar: function()
    {
        console.log('Opa')
    }
}