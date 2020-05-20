let a = 3
console.log(this.a) //let não está no objeto global

this.c = 123
console.log(module.exports.c)
console.log(module.exports === this)
//Module exports vai exportar a variavel pra fora do arquivo
//Dentro de node, cada arquivo é um MÓDULO DIFERENTE

this.d = false
this.e = 'teste'
console.log(module.exports) //123,false,'teste' => exportar objeto
// module.exports = { e: 456,f: false,g: teste}

//criando variavel global
abc = 123
console.log(global.abc) //n fazer isso

