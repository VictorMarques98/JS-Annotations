//Padrão CHAIN OF RESPONSABILITY = um passo não está diretamente ligado a outro

//definir funções middleware
const passo1 = (ctx,next) =>
{                           //cxt = obj que vai sendo passado de um passo(midleware) para outro. Ele carrega os dados de uma func para outro
    ctx.valor1 = 'mid1'     //next dispara o próximo passo
    next()
}

const passo2 = (ctx,next) =>
{
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = (ctx) => ctx.valor3 = 'mid3' // como não quero próximo passo, não sou obrigado a chamar/declarar o next

const exec = (ctx,...middlewares) => //...middlewares = operador REST, passar varias funções e ela junta em um array
{
    const execPasso = indice => //execute o passo de indice 0
    {
        middlewares && indice < middlewares.length &&    //executar midlewares se indice for menor que length do arrray
            middlewares[indice](ctx, () => execPasso(indice + 1)) // () => exec é a função next. Recursividade
    }
    execPasso(0)
}

const ctx = {}
exec(ctx,passo1,passo2,passo3) //vai pegar os 3 parametros usando o operardor REST (...middlewares)
//dentro do exec vc pode trocar a ordem da exec das funções exec(ctx,passo3,passo1,passo2)
console.log(ctx)
