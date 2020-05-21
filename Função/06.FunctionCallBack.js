//Padrão observer = chamar a callback (orientada a evento)

const fabricantes = ['Mercedes','Audi','Bmw']

let imprimir = (nome,indice) => console.log(`${indice + 1}. ${nome}`)


fabricantes.forEach(imprimir) //Sempre na callback, deverá haver 2 parametros de entrada, o nome e indice
fabricantes.forEach(fabricante => console.log(fabricante)) //Primeiro indice é apenas o valor da variavel

//Exemplo 2 --------------
console.log('exemplo 2 -------')

const notas = [1,2,3,4,5,6,7,8,9]

//sem callback
let notasbaixas = []
for(let i in notas)
{
    if(notas[i] < 7) {notasbaixas.push(notas[i])}
}
console.log(notasbaixas, '  sem callback')

//com Callback (filter é callback)
let notasbaixas2 = notas.filter(nota => nota < 7) //filter retorna valor booleano, então deve haver uma condição. Se true, ela inclui no novo array
console.log(notasbaixas2,'  com callback')
