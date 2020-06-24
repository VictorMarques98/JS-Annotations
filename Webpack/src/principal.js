//Só vai imprimir função cumprimentar pois estou referenciando ela
import Pessoa from './pessoa'

const atendente = new Pessoa
console.log(atendente.cumprimentar())

//Referenciar modulos
const moduloA = require('./modulos/modulaA')

//Referenciar CSS
const css = require('./assets') //quando n se coloca, ele procura automaticamente o arquivo index.js
