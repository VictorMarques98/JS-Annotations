function area (largura,altura)
{
    const area = largura * altura
    if( area > 20) {console.log(`Valor acima do permitido ${area}`)}
    else {return area} //Não recomendado, pois function irá retornar undefined
}
console.log(area(2,2))
console.log(area(5,5))

//------Function Sem Parâmetro

function soma()
{
    let soma = 0
    for(i in arguments) //Pegar o indice de cada elemento passado como parametro
    {
        soma += arguments[i] //Arguments = array interno de uma função que tem todos os argumentos passados
    }
    return soma
}
console.log('Parametros variaveis-----')
console.log(soma()) //vai atribuir 0
console.log(soma(1))
console.log(soma(1,2,3,4)) //vai para arguments
console.log(soma('a','b','c'))

//---Parametro padrão
console.log('Parâmetro Padrão--------')

function soma1(a,b,c)
{
    a = a || 1 //trazer um valor padrão pra variável, se a = false, retorna 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(),soma1(2),soma1(2,3,4),soma1(0,0,0)) //Problema em somar valores 0,0,0 pois retornam false

//Outras estratégias para valores padrão
function soma2 (a,b,c)
{
    a = a !== undefined ? a : 1 //0 in arguments
    b = 1 in arguments ? b : 1 //dentro de arguments existe 1? Se existir pegue B senão 1
    c = isNaN(c) ? 1 : c //Forma mais segura dessas 3, perde pra ES15
    return a + b +c
}
console.log(soma2(),soma2(2),soma2(4,5,6),soma2(0,0,0))

//Parametro padrão do ES15 - recomendada
function soma3(a = 1,b = 1,c = 1) //valor padrão no próprio parametro
{
    return a + b + c
}
console.log('Padrão ES15----')
console.log(soma3(),soma3(2),soma3(3,4,3))