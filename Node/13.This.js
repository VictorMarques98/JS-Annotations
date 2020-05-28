console.log(this === global) //false, pois this n aponta pra global e sim module exports
console.log(this === module) //false, pois this eh objeto

console.log(this === module.exports) //true
console.log(this === exports) //true, pois exports aponta pra mesma ref

function logThis()
{
    console.log('Dentro de uma function')
    console.log(this === exports) //falso, pois this aponta pra function
    console.log(this === global) //this aponta pra global dentro de uma função
}
logThis()

