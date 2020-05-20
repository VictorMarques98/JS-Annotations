for(var i = 0; i < 10; i++) {}
console.log('i = ', i) // i = 10, é quando i sai do laço

for(let a = 0; a < 10; a++) {}
// console.log('a = ', a) // a não está definido, pois está em escopo de bloco

const funcs = []

for(var b = 0; b < 10; b++)
{
    funcs.push(function() {console.log('b = ' + b)}) //add função em array
}
funcs[2]()
funcs[8]() //Será impresso o valor 10, pois var não tem escopo de função

const funcs2 = []
for (let c = 0; c<10; c++)
{
    funcs2.push(function() {console.log('c = ' + c)}) //add função em array
}
funcs2[2]()
funcs2[8]() //Conceito de closure, e let tem variavel bloco. Função tem consciencia do local de onde foi definida
