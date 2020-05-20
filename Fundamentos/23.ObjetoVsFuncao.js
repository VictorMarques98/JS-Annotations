console.log(typeof Object) //function
console.log(typeof new Object) //Instanciando uma função, agr virou OBJ
// console.log(typeof new Object()) //Pode omitir os ()

const cliente = function () {}
console.log(typeof cliente) //function
console.log(typeof new cliente) //obj

class Produto {} //ES15
console.log(typeof Produto) //function
console.log(typeof new Produto) //object

