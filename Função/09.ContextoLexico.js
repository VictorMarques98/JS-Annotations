const valor = 'Global'

function minhaFuncao()
{
    console.log(valor)
}

function exec()
{
    const valor = 'Local'
    minhaFuncao() //função carrega consigo o local onde ela foi definida, seu contexto léxico
    //NÃO NO LOCAL DE EXECUÇÃO, MAS SIM NO LOCAL ONDE FOI DEFINIDA,por isso valor = GLOBAL
}

exec()