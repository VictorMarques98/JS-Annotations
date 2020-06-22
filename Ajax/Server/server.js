//Importar dependencias
const bodyParser = require('body-parser')
const express = require('express')

//Instanciar express
const app = express()

//Aplicar funções middlewares = executadas quando requisição chegar
app.use(express.static('../')) //Fornecer arquivos estaticos da pg anterior
app.use(bodyParser.urlencoded({extend:true})) //Caso venha submit de um form e transforma obj
app.use(bodyParser.json()) //Caso venha um JSON,convertera para obj

app.get('/teste',(req,res) => res.send('Ok')) //Qnd vier req do tipo GET com a URL Teste, será aplicado a função

//Importar multer para upload
const multer = require('multer')
const storage = multer.diskStorage({ //Configurar destino do upload
    destination: function (req,file,callback)
    {
        callback(null,'.') //'.' = destino
    },
    filename:function (req,file,callback)
    {
        callback(null,`${Date.now()}_${file.originalname}`) //nome
    }
})
const upload = multer({storage}).single('arquivo') //'arquivo' é o nome dado ao input no html
app.post('.',(req,res) =>
{
    upload(req,res,err =>
    {
        if(err)
        {
            return res.end('Ocorreu um erro')
        }
        res.end('Concluido com sucesso')
    })
})

//Configurar upload via fetch api pra formul(necessário ter body parser)
app.post('/formulario',(req,res) =>
{
    res.send(
        {
            ...req.body,
            id: 1
        }
    )
})

//Configurar Par ou Impar com axios
app.get('/parOuImpar',(req,resp) =>
{
    //req.body
    //req.query
    //req.params
    const par = parseInt(req.query.numero) % 2 === 0
    resp.send(
        {
            resultado: par ? 'par' : 'impar'
        }
    )
})

//Iniciar o servidor
app.listen(8080, () => console.log('Servidor Executando'))
