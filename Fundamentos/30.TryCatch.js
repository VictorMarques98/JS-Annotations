//Tratamento de erro
function tratarErroLancar(erro)
{
    // throw new Error('deu erro')
    // throw 10
    throw false
}

//Try verifica dentro do bloco se há algum erro, e joga para catch
function imprimirNome(obj)
{
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroLancar(e)
    } finally { //finally sempre sera executado, independente de erro ou não
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNome(obj)