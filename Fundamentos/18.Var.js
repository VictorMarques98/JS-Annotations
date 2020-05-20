//Escopo = local onde a variável é visível
{{{{var sera = 'Será?'}}}}

//var é visivel fora do bloco ou escopo
console.log(sera)

function teste ()
{
    var local = 123
}
teste()
//Local não estara visivel fora da função, pois seu escopo é dentro da função
console.log(local)

//Quando vc cria uma variavel fora do escopo de uma função, ela estará no escopo global