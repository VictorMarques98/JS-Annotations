//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas à função

//Contexto léxico em ação

const x = 'Global'
function fora(){
    const x = 'Local'
    function dentro()
    {
        return x
    }
    return dentro
}

const minhaFuncao = fora ()
console.log(minhaFuncao())
//Por conta da função ter um Closure, no contexto em que dentro() foi CRIADA ela poderá manipular variaveis no seu escopo,
//nesse caso o escopo é da function fora(), por isso será impresso LOCAL
//Qnd vc cria uma function, vc possui acesso tanto aos dados dentro dela, como ao escopo externo
