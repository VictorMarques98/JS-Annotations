//Switch = multiplas seleções
const imprimir = function (nota)
{
    switch (Math.floor(nota)) //Não retorna true ou false (booleano) //Floor = arredonda para baixo
    {
        case 10:
        case 9:
            console.log('Quadro de Honra') //Case 10 e Case 9
            break //Tem que haver o break,senão executará todos abaixo
        case 8: case 7: case 6:
            console.log('Aprovado')
            break
        case 5: case 4: case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimir(10)
imprimir(9)
imprimir(7)
imprimir(5)