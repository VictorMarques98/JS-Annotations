//Aplicação node é organizada em arquivos e pastas
//Em NODE um arquivo representa um módulo (módulo = não deixa tudo dentro dele visível)
//Commons JS e ECMA15 = padrões de módulo do Node

//Formas de exportar conteudo para fora do módulo, menos comum
//A forma mais comum está no móduloB
this.ola = 'Fala pessoal'
exports.bemVindo = 'Bem vindo ao node' //ambos são objetos
module.exports.ateLogo = 'Até'

//No exemplo acima, vc está colocando 3 atributos de formas diferentes
//no mesmo objeto

console.log(this)