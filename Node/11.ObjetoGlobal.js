// console.log(global)

//Uso do objeto global - cuidado ao usar
global.geradorArray = {
    array() {
        let sum = [0,0,0]
        let soma = sum.map(e => e + 1)
        return soma
    },
    nome: 'Gerar Array'
}