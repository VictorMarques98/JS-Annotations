//Rest = ...(juntar)
//Spread = espalhar

//Usar spread com objeto
const funcionario = {nome: 'Maria', salario: 1234}
const clone = { ativo: true, ...funcionario}
console.log(clone)

//Spread no contexto de array
const grupoA = ['João','Pedro','Gloria']
const grupoFinal = ['Maria','Rafaela',...grupoA]
console.log(grupoFinal)