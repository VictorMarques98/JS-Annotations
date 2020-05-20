var numero = 1
{
    let numero = 2
    console.log('dentro = ',numero)
}
//Let possui escopo de bloco, ou seja, estará definido apenas dentro do bloco
console.log('fora = ', numero)

/*
Var = possui escopo global e de função
Let = possui escopo global, de função e bloco
 */