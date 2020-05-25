class Lancamento {
    constructor(nome = 'Genérico',valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes,ano)
    {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamento(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario()
    {
        let valorConsolidade = 0
        this.lancamentos.forEach(l => {
            valorConsolidade += l.valor
        })
        return valorConsolidade
    }
}

const salario = new Lancamento('Salario',45000)
const luz = new Lancamento('Luz',-220)

const contas = new CicloFinanceiro(6,2018)
contas.addLancamento(salario,luz)
console.log(contas.sumario())

//Classe2-----------
console.log('Classe 2 -----------')

class Avo {
    constructor (sobrenome)
    {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome,profissao = 'Professor') {
        super(sobrenome) //chamar super (constructor avo)
        this.profissao = profissao

    }
}
