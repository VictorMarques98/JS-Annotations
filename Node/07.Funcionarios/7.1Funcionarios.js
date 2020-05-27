const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const data = axios.get(url).then(response =>
{
    const funcionarios = response.data
    let woman = funcionarios.filter(e => e.genero === 'F')
    let chinese = woman.filter(e => e.pais === 'China')
    let wage = chinese.reduce((ac,at) => ac.salario < at.salario ? ac : at)
    console.log(wage)
})

console.log(data)




//Obter mulher chinesa com menor salário