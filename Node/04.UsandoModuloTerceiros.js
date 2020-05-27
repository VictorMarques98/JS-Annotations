//Npm = gerenciador de pacotes do Node - responsável por baixar bibliotecas(reac,angular,jquery)
//Npm i = npm install
//Não enviar pasta Node modules para git, usando o git ignore

//Para instalar de forma global uma lib = npm i -g
const _ = require('lodash')//N precisa de caminho relativo. _ é para referenciar uma library
setInterval(() => console.log(_.random(1,5000)),1000)

