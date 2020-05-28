const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const produtos = {}

function productSave(produto)
{
    if(!produto.id) produto.id = sequence.id //Se o produto não estiver setado, ele recebe sequence.id
    produtos[produto.id] = produto //caso n estiver setado, ele atribui um novo atributo ao obj
    return produto
}

//função para pegar produto por id

function getProduto(id)
{
    return produtos[id] || {}
}

function getProdutos()
{
    return Object.values(produtos)
}

//excluir produto
function deleteProduto(id)
{
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {productSave,getProduto,getProdutos,deleteProduto} //N deixamos sequence visível para fora do database