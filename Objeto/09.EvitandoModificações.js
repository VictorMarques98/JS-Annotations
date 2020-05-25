//Object.preventExtensions = não deixa obj ser extensivel (add mais attr)
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.19, tag: 'promoção'
})
console.log('Extensível:',Object.isExtensible(produto)) //false

//Vc pode alterar e excluir, mas não add
produto.nome = 'borracha'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = { nome:'Maldita',idade:23}
Object.seal(pessoa)
console.log('Selado:',Object.isSealed(pessoa)) //consigo alterar, mas não excluir ou add

//Object.freeze = selado + valores ctes

