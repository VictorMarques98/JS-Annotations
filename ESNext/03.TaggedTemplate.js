//Tagged templates = processar o template string dentro de uma function
function tag(partes,...valores)
{
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`)

//Exemplo
function real(partes,...valores)
{
    const result = []
    valores.forEach((valor,indice) =>
    {
        valor = isNaN(valor) ? valor:`R$${valor.toFixed(2)}`
        result.push(partes[indice],valor)
    })
    return result.join("")
}
const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`)
