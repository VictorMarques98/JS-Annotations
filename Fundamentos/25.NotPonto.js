console.log(typeof console)

console.log(Math.ceil(6.1)) //acessar atributo de Math, .ceil

const obj1 = {}
obj1.nome = 'Victor'
console.log(obj1.nome)

function Obj(nome)
{
    this.nome = nome //this = deixar nome visivel para além da function Obj
}

const obj2 = new Obj ('Cadeira') //Criou atributo nome que irá ficar visivel para fora da function
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome) //Notação ponto para acessar atributos que ESTÃO ACESSIVEIS para fora do obj
