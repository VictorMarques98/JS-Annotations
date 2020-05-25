
//Object create
const pai = { nome: 'Pedro',corCabelo: 'preto'}

//Criar objeto filha tendo prototipo pai
const filha1 = Object.create(pai)
filha1.nome = 'ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})
console.log(filha2.nome)
filha2.nome = 'carla'
console.log(Object.keys(filha2))

for(let key in filha2)
{
    console.log(key)//key do proprio objeto
}

// Herança2----------------------------------------------------
function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto //todos objs criados a partir da mesma função construtora, apontam pro mesmo objeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

//Atribuir parametro para prototype,objs criado pela função MeuObjeto, tem acesso a .nome e .falar
MeuObjeto.prototype.nome = 'função'
MeuObjeto.prototype.falar = function (){
    console.log(`Meu nome eh ${this.nome}`)}

obj1.falar()
obj1.nome = 'Victor'
obj1.falar()

//mudar referencia de objeto
const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

//Resumindo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)

//Herança3------------------------
console.log('Herança 3 ------------')

console.log(typeof String) //String,Array e Object possuem atributo .prototype, pois toda função possue ele
console.log(typeof Array)
console.log(typeof Object)
console.log(typeof new Object)

String.prototype.reverse = function () //Ele criou o metodo first em string
{
    return this.split('').reverse().join('')
}
console.log('Escola Cod3r'.reverse())

Array.prototype.first = function()
{
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c','d'].first())

//Não alterar funções presentes nativamente no protótipo
// array.prototype.toString = função()

//Herança 6 ----------------------------------------------------
console.log('Herança 6 ------------')

function Aula(nome2,videoId)
{
    this.nome2 = nome2
    this.videoId = videoId
}

const aula1 = new Aula('Bem Vindo',123) //new cria novo obj e protótipo aponta pra Aula
const aula2 = new Aula('Até Brever',456)
console.log(aula1,aula2)

//simulando new
function novo(f,...params)
{
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj,params)//Executará a função f passando de contexto o obj e params
    return obj
}

const aula3 = novo(Aula,'Bem vindo',678)
console.log(aula3)