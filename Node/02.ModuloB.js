//Forma mais comum de exportar
module.exports = {
    bomDia: 'Bom dia',
    boaNoite(){
        return 'Boa Noite'
    }
}

//O que está fora do module exports, não sera exportado
let cumprimento = ola =>
{
    return ola
}
console.log(cumprimento("oiee"))