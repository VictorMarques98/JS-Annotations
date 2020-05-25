//Filter é menor ou do mesmo tamanho que o array original
//retorna true ou false

const prod = [
    { nome: 'notebook', preco: 214,fragil: true},
    { nome: 'vidro', preco: 300,fragil: false},
    { nome: 'copo', preco: 1289,fragil: true},
]

console.log(prod.filter(e => e.fragil === true))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
console.log(prod.filter(caro).filter(fragil))