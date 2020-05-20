function boaNoticia(nota)
{
    if(nota>=7) {return 'aprovado'}
}

console.log(boaNoticia(8))
console.log(boaNoticia(6))

function verdade(valor)
{
    if(valor) //quando vc passa apenas a var sem uma estrutura de condição, o IF converte aqui pra TRUE ou FALSE
    {
        //Só vai imprimir se valor = true
        console.log('é verdade..' + valor )
    }
}

verdade()
verdade(null)
verdade('')
verdade(0)
verdade(-1)
verdade('?')
verdade(' ')
verdade({})


