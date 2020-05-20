//Quando se tem indeterminadas de repetições
function inteiroAleatorio(min,max)
{
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) //Baseada em estrutura de repetição com indeterminadas repetições
{
    opcao = inteiroAleatorio(-1,10)
    console.log(`${opcao}`)
}

console.log('Fim')
