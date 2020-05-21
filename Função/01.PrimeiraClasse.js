//Criar de forma literal
function fun1() {}//Caso vc não chame Return, vai retornar undefined

//Armazenar em uma variável
const fun2 = function() {} //Função anonima atribuida a uma cte

//Armazenar dentro de um array
const array = [function () {},fun1,fun2]
console.log(array[0])//exec function

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {}
console.log(obj.falar())

//Passar função como param para outra função
function run(fun)
{
    fun() //() invoca a função
}
run(function() { console.log('executando...')}) //passou func como parametro

//Uma função pode retornar/conter uma função
function soma (a,b)
{
    return function(c)
    {
        console.log(a + b + c)
    }
}
soma(2,3)(4) //soma(a,b)(c)
