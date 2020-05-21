console.log(soma(1,2)) //consigo chamar function antes, pois o interpretador carrega todas as functions previamente
// console.log(sub(1,2)) function expression não da para chamar antes
// console.log(mult(1,2)) function named não da para chamar antes


//function declaration
function soma(x,y) {return x + y}

//function expression
const sub = function (x,y) {return x - y}

//named
const mult = function mult (x,y) {return x*y}

