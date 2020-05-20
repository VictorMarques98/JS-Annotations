Number.prototype.entre = function (inicio, fim)
{
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota)
{
    if(nota.entre(9,10))
    {
        console.log('Quadro de Honra')
    } else if(nota.entre(7,8.99)) //Else if = encadear varias condições. Else if != Else
    {
        console.log('Aprovado')
    }
    else { console.log ('Reprovado')}
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)