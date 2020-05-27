const filhas = ['Valesca','ana']
const filhos = ['victor','thiago']

//concatenar arrays, não altera arrays originais
const filhx = filhas.concat(filhos,'Fulano')
console.log(filhx)

//FlatMap
const escola =
    [{
    nome:'turma1',
    alunos:
        [{
        nome: 'Gustavo',
        nota: 9.3
        }, {
        nome: 'Ana',
        nota: 8.1
        }]
    },{
        nome:'turma2',
        alunos:
            [{
                nome: 'thiago',
                nota: 8.0
            }, {
                nome: 'Roberta',
                nota: 6
            }]
    }]

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback)
{
    return Array.prototype.concat.apply([],this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)