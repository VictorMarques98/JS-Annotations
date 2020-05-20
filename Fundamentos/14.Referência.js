const a = { name: 'teste'}
//O que a variável possui, é o endereço de onde esse objeto está localizado
console.log(a)
//B recebe o endereço de A (da memória). Chamado de ATRIBUIÇÃO POR REFERÊNCIA
const b = a
b.name = 'opa'
console.log(a)

/*Como B e A armazenam o mesmo endereço de memória (b = a)
Ambos sentirão a mudança, pois apontam pro mesmo local de memória
 */

/*Nesse caso, como o valor da variável era um valor primitivo da linguagem,
era feito uma CÓPIA POR VALOR, sendo valores de C e D independentes
 */
let c = 3
let d = c
d++
console.log(`${c},${d}`)
