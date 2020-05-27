console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null //Msm mudando, module.exports continua com b = 2
console.log(module.exports) //pois exports é uma outra variavel apontando pro msm obj

//Se vc precisa criar um objeto e exporta-lo, SEMPRE usar
module.exports = {nome:'exportar'}