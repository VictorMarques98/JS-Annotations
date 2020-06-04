//Configurar e receber a requisição via metodo post

//1 - Importar express
const express = require('express')
const app = express()

//2 - Importar body parser
const bodyParser = require('body-parser')

//3 - Associar express e bodyparser
app.use(bodyParser.urlencoded({extended:true}))

//4-Atender as URL e metodo que fora definido no FORM
app.post('/usuarios', (req,resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns Usuário Incluido</h1>')
})

//5- Escutar a porta
app.listen(3003)

//Como alterar usuário
app.post('/usuarios/:id', (req,resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns usuário alterado</h1>')
})
