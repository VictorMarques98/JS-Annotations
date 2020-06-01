//Promise = processamento assíncrono
//Promise = promessa (obtem sucesso ou rejeição)

let tellAfter = (seg,phrase) =>
{
    return new Promise((resolve,reject) => { //Promise recebe callback. Função resolve só sera chamada se a promise for atendida
        setTimeout(() => {
            resolve(phrase) //aceita apenas um parametro
        },seg*1000)
    })
}

tellAfter(3,'Cool')
    .then(phrase => phrase.concat('?')) //.then = para acessar o resultado de uma promessa atendida
    .then(anotherPhrase => console.log(anotherPhrase))
