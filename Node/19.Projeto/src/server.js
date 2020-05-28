//configurar express (framework web) e body-parser

//1 - Declarar uma porta(processo dentro do computador que precisa comunicar com a rede)
const porta = 3030 //porta tem numero único

//2.1- Importar & instanciar express
const express = require('express')
const app = express()

//2.1 - Importar % instanciar body-parse
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true})) //app.use = para qualquer requisição que vc faça,independete da URL, irá chamar essa função middleware
                                                //obrigatório o extend true
                                                //a requisição deve estar em formato URL enconded
                                                //vai aplicar middleware que vai fazer um parse e transformar em obj

//Teste passando como parametro função middleware
// app.get('/produtos', (req,res,next) => {
//     res.send({nome: 'Salve',preco: 123.45}) //send envia uma resposta em formato JSON. Next n foi usada nesse contexto
// })

//3- Definir uma função para escutar a porta
app.listen(porta, () => {
    console.log('Servidor executando na porta 3030') //callback será chamada se tudo der certo
})

//4 - Importar banco de dados (nosso caso foi o database.js)
const database = require('./database')

//5 - Alterar o res.send (1º sem parametro, e 2º com parametro)
app.get('/produtos',(req,res,next) => { //traz todos produtos cadastrados
    res.send(database.getProdutos())
})

app.get('/produtos/:id', (req,res,next) => { //Vou digitar /produtos/1 e partir disso consigo obter o produto de id que necessito
    res.send(database.getProduto(req.params.id))//traz produto especifico baseado no id
                                                //req.params = local onde tenho os parametros que coloquei na url
})

//6 - submeter e salvar os dados dos produtos via POST
app.post('/produtos',(req,res,next) => {
    const produto = database.productSave({ //Passando como parametro um obj que veio no corpo da req
        name: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) //Vai converter em um JSON
})

//7 - Alterar objeto
app.put('/produtos/:id',(req,res,next) => {
    const produto = database.productSave({
        id: req.params.id,
        name: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

//8 - Deletar objeto
app.delete('/produtos/:id',(req,res,next) => {
    const produto = database.deleteProduto(req.params.id)
    res.send(produto)
})
