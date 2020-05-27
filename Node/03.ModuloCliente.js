//Clientes = vai receber os módulos

//Importar
const modulaA = require('./01.ModuloA') //Se o arquivo for .JS, n precisa colocar extensão
const moduloB = require('./02.ModuloB')

//Fazendo uso dos atributos, modulos são exportados na forma de OBJ
console.log(modulaA.bemVindo,moduloB.boaNoite())
console.log(modulaA)
console.log(moduloB)

//Npm = gerenciador de pacotes do Node - responsável por baixar bibliotecas(reac,angular,jquery)
//Npm i = npm install
//Não enviar pasta Node modules para git, usando o git ignore

