//Metodo1
const moduloA = require('../../01.ModuloA') // ../sair da pasta atual
console.log(moduloA.ola) //respeitar o nome original da pasta

//Metodo2
// const moduloB = require('C:\\Users\\Victor\\Documents\\Projetos\\CURSO - WEB MODERNO\\0. Anotações JS\\Javascript Estudos\\Node\\02.ModuloB.js')

//Quando vc importa modulos de terceiros:
const lodash = require('lodash')
//Ele procura o arquivo index desse módulo