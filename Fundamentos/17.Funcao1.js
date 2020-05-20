//Função = verbo/ação que executa sentenças de código dentro de um bloco ({})

//Função sem retorno. A e B são parâmetros com qualquer tipo de dado que eu queiro
function imprimirSoma(a,b)
{
    console.log(a + b)
}
imprimirSoma(2,3)

//Função com retorno e segundo parametro definido
function soma(a,b = 0)
{
    return a + b
}
console.log(soma(2))

//Armazenar função em variável, função anônima
const imprimir = function (a,b) {
    return a + b
}
console.log(imprimir(2,3))

//Armazenar uma função arrow em variavel
const soma2 = (a,b) => {return a + b}
console.log(soma2(2,10))

//Retorno implicito, uma linha apenas de código
const soma3 = (a,b) => a + b
console.log(soma3(10,12))

//Retornar mais de um valor de uma function
function oie (c,d)
{   const soma = c + d;
    const sub = c - d
    return { soma, sub}
}
console.log(oie(1,2))