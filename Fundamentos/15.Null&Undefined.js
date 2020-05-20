let valor //Não inicializada
console.log(valor) //Undefined = valor declarado, porém, não inicializado

console.log(valor2) //Its not defined = valor não foi declarado e nem incializado

valor = null //Null = variável não está apontando para nenhum endereço de memória. Ausência de valor, porém ela foi definida
console.log(valor)

//Evitar usar undefined, usar null para zerar o valor de uma variável

console.log(valor.toString())//Cannot read of null

//Como produto está definido, preço retornará undefined, porém, não da para retornar algo se seu antecessor esteja undefined (caso preco.a)
const produto = {}
console.log(produto.preco)//Undefined
console.log(produto.preco.a) //Cannot read, pois não da para ter propriedade de algo que está indefinido, no caso, preco
console.log(produto)//{}

produto.preco = 3.5
console.log(produto.preco)//3.5