const aluno = [
    { nome: 'João', nota: 5},
    { nome: 'maria', nota:8}
]

//Imperativo
let total1 = 0
for(let i = 0;i<aluno.length;i++)
{
    total1 += aluno[i].nota
}
console.log(total1 / aluno.length)

//DECLARATIVO . Mais preocupado EM QUE do que NO COMO
const getNota = aluno => aluno.nota
const soma = (total,atual) => total + atual
const total2 = aluno.map(getNota).reduce(soma)
console.log(total2/aluno.length)
