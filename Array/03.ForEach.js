//Percorrer Array

let array = [90,1,2,3,4,5,6]

array.forEach((element,index) => {
    console.log(`${index}) ${element}`)
})

// array.forEach(e => console.log(e)) //N há necessidade de passar o indice

const numbers = element => {
    let num = 0
    element > 5 ? num = element : num = "menor"
    console.log(num)
}
array.forEach(numbers) //função previamente definida

//Como funciona o forEach
Array.prototype.forEach2 = function(callback)
{
    for(let i = 0;i<this.length;i++)
    {
        callback(this[i],i,this)
    }
}
array.forEach2(function(elemento,indice) {
    console.log(`${indice + 1}) ${elemento}`)
})

