//Json não converte função

//objct => JSON
const obj = {a:1,b:1,c:1,soma() {return a+b+c}}
console.log(JSON.stringify(obj))

//JSON => objct
console.log(JSON.parse('{"a":1,"b":2,"c":3,"d":"string","e": {},"f": []}'))
