//Aritiméticas = + / * - %

//Relacionais = retorna sempre true ou false
console.log('01','1'== 1) //True, pois compara apenas o valor
console.log('01','1'=== 1) //False, pois compara valor e tipo de variavel, no caso, string e number
console.log('03','3' != 3) //False
console.log('04','3' !== 3) //True
// > ; < ; >= ; <=
console.log(undefined == null)//true
console.log(undefined === null)//false

/*Logicos
&& (e): V e V -> V (ambos true)
|| (ou): V ou F -> V (pelo menos um true)
!= (ou exclusivo): V ou V -> F (ambos tem que ser diferente)
 */

//Operador ternário
const resultado = nota => nota >= 7 ? 'aprovado' : 'reprovado' //se >= ' aprovado' se <= 'reprovado'


