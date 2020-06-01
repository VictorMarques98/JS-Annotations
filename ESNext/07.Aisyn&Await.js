//Async e Await = função para deixar um código assíncro parecendo sincrono

const http = require('http')

const getTurma = letra =>
{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) =>
    {
        http.get(url, res =>
        {
            let resultado = ''

            res.on('data', dados =>
            {
                resultado += dados
            })

            res.on('end', () =>
            {
                try
                {
                    resolve(JSON.parse(resultado))
                }
                catch(e)
                {
                    reject(e)
                }
            })
        })
    })
}

//Simplificar o uso de promise...
let obterAlunos = async() => {          // só pode usar o await quando tiver o async
    const turmaA = await getTurma('A') //atribui o resultado da getTurma('A') para turmaA. Não chamou o then
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA,turmaB,turmaC)
} //por mais que retorne array, ela vai retornar um objeto do tipo async function

obterAlunos().then(alunos => alunos.map(a => a.nome))
.then(nomes => console.log(nomes))