//String = cadeia de caracteres
const escola = 'cod4r'

console.log(escola.charAt(4))//Vai retornar o caractere de indice 4
console.log(escola.charAt(5))//N existe, vai retornar valor vazio
console.log(escola.charCodeAt(3)) //Pegar o valor do caractere de posição 3 na tabela unicode

//Descobrir o indice em que o caractere esta
console.log(escola.indexOf('4')) //3

//Imprimir de um indice ate o final
console.log(escola.substring(1))//od4r

//Imprimir de um indice até outro
console.log(escola.substring(0,3)) //cod - Não inclui o 3

//concatenar
console.log('Escola'.concat(escola).concat("!")) //Escola = literal

//replace: substuit caractere especifico por letra (caractere 4,não posição 4)
console.log(escola.replace(4,'e')) //coder

//Converter string para array
console.log('Ana, Maria, Pedro'.split(','))

