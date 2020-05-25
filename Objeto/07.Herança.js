//Padrão Decorator
//Herança baseada em protótipo

//Herança1
let ferrari = {
    modelo: "f40",
    velMax: 320
}

const volvo = {
    modelo:'V40',
    velMax: 200
}

//Acessar obj pai de ferrari, caso ferrari n tenha certo atributo, irá procurar no pai
console.log(ferrari.__proto__)

//Object.prototype === .__proto__
console.log(ferrari.__proto__ === Object.prototype) //true, ferrari n possui .prototype

//Object.prototype.__proto__ === null - ele n tem outro obj pai
//toda função tem parametro .prototype

function MyObject () {}
console.log(typeof Object, typeof MyObject)
console.log(Object.prototype, MyObject.prototype)//objs diferentes

//Herança 2 ---------------------------------------------------
console.log('--------Herança 2 ----------')

//cadeia de prototipos (prototype chain)
const avo = { attr1: 'A'}
const pai = {__proto__:avo, attr2: 'B'}
const filho = {__proto__:pai, attr3: 'C'}
console.log(filho.attr1)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){return `${this.velAtual}Km/h de ${this.velMax}Km/h`}
}

 ferrari = {
    modelo: "f40",
    velMax: 320 //shadowing
}

Object.setPrototypeOf(ferrari,carro) //ferrari tem carro como seu protótipo

console.log(ferrari)
ferrari.acelerarMais(300)
console.log(ferrari.status())