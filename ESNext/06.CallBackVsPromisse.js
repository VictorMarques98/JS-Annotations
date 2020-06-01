//Obter 3 arquivos JSON de 3 turmas diferentes

//1 -Usando Callback, sem promisse
const http = require('http')

const getTurma = (letra,callback) => //callback sera chamada quando obter td o dado da turma
{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res =>
    {   //res vai retornar uma string de dados
        let resultado = ""
        res.on('data',dados =>
        {   //como res retorna strings separadas, resultado vai concatenar tudo em uma
            resultado += dados
        })

        res.on('end',() =>
        {
            callback(JSON.parse(resultado))
        })
    })
}

//Implementando a chamada = callback hell

let nomes = []
getTurma('A',alunos =>
{
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`)) //origem do nome
    getTurma('B',alunos =>
    {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`)) //origem do nome
        getTurma('C',alunos =>
        {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`)) //origem do nome
            console.log(nomes)
        })
    })
})
