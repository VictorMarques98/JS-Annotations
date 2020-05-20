//No JS, o array é heterogêneo e não possui tamanho fixo

const valores = [7,8,9,10]
console.log(valores[0],valores[1],valores[4]) //valores[4] = undefined

// valores[10] = 10
console.log(valores)
console.log(valores.length)//Qnttd elementos do array

//Adicionar elementos no array
valores.push({id: 3},false,null,'teste',5)
console.log(valores)

//Pegar o ultimo valor do array (retira o valor do array)
console.log(valores.pop())
delete valores[0] //Deleta e não retira o espaço na memória
console.log(valores)

console.log(typeof valores) //Object