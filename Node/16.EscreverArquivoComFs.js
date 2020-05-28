//Criar e salvar arquivos usando o fileSystem

const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1234,
    desconto: 0.15
}

fs.writeFile(__dirname + '/17.ArquivoGerado.json',JSON.stringify(produto),err => {
    //callback para verificar se haverá erros
    console.log(err || 'Arquivo salvo')
}) //coverter obj em JSON