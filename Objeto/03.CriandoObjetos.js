//Usando anotação literal
const obj = {}
console.log(obj)

//Object em JS
console.log(typeof Object, typeof new Object) //function. object

//Usando função construtora
const obj1 = new Object
console.log(obj1)

//Criando suas próprias funções construtoras
function Produto (nome,preco,desc)
{
    this.nome = nome //tornar publico
    this.getPrecoComDesconto = () => {
        return preco * ( 1 - desc) //Não há possibilidade de alterar desc e preco, devido ao escopo
    }
}

const p1 = new Produto ('Caneta',8,0.1)
const p2 = new Produto ('Mochila',134,0.5)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

//Função Factory
function criarFuncionario(nome,salario,faltas)
{
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return Math.floor((salario / 30) * (30 - faltas))
        }
    }
}

const f1 = criarFuncionario('Maria',1500,1)
const f2 = criarFuncionario('joao',2000,20)
console.log(f1.getSalario(),f2.getSalario())

//Uma função famosa para transformar json em OBJECT
const fromJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJson)