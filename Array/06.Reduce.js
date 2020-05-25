const aluno =
    [
        {nome: 'victor',autista:true, nota:1},
        {nome: 'victor2',autista:false, nota:2},
        {nome: 'victor3',autista:true, nota:3},
    ]
console.log(aluno.map(e => e.nota))
const resultado = aluno.map(e => e.nota).reduce((acumulador,atual) => {
    console.log(acumulador,atual)
    return acumulador + atual
},)
// array.reduce(function,valorInicial)
console.log(resultado)

//Desafio--------
const autistas = (resultado,bolsista) => resultado && bolsista
console.log(aluno.map(a => a.autista).reduce(autistas))

//Desafio2-------
const algumBolsista = (resultado,bolsista) => resultado || bolsista
console.log(aluno.map(e => e.autista).reduce(algumBolsista))


