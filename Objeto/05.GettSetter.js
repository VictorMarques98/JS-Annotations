const sequencia = {
    _valor:1, //convenção que essa variavel é pretendida ser acessada apenas internamente
    get valor() {return this._valor++},//get e setter são funções que podem ser acessadas externamente
    set valor(valor) { if(valor > this_valor) {this._valor = valor}}
}

console.log(sequencia.valor,sequencia.valor)