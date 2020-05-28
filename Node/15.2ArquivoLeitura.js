//Importar o FileSystem (fs) responsável pela leitura de arquivos
//Módulo interno do Node, não precisa baixar pelo package.json

const fs = require('fs')
const caminho = __dirname + '/15.1Arquivo.json'
//__dirname = diretório atual

//Ler arquivo de forma sincrona = não recomendado para IO. Pois ele vai ler o arquivo completamente, só ai libera o event loop
const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)

//Leitura Assíncrona = mais recomendado. Passando callback para chamar quando o arquivo tivesse sido carregado
fs.readFile(caminho,'utf-8',(err,conteudo) => {

    //conteudo é retornado em forma de string, e por isso, deve ser convertido em OBJ
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

//Para ler um arquivo JSON, tem um método mais rapido e interesssante
console.log('ler json melhor-----------')

//forma SINCRONA
const config = require('./15.1Arquivo.json') //carregar configurações do banco de dados
console.log(config.db)

//Leitura de pasta
console.log('Leitura de pasta ---------')

fs.readdir(__dirname,(err,arquivos) => {
    console.log('Conteudo da pasta')
    console.log(arquivos)
})