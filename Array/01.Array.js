//Array é um tipo de objeto, porém é função
console.log(typeof Array,typeof new Array,typeof [])

let aprovados = new Array('Bia','ana','carlos')
console.log(aprovados)

aprovados = [1,2,3,4]
console.log(aprovados,aprovados[1],aprovados[4])

//add elemento na ultima posição
aprovados.push(5)
console.log(aprovados)

//ordernar array
aprovados.sort() //reordena o array original por ordem ascendente

//deletar
delete aprovados[1]
console.log(aprovados) //remove indice 1, mas n reordena

//Splice = adiciona e remove elementos
aprovados = [1,2,3,4,5,6,7,8,9]
aprovados.splice(1,1,'Victor') //(StartIndex,EndIndex,addElement)
console.log(aprovados)
aprovados.splice(1,0,'Thiago') //add elemento sem excluir nenhum
console.log(aprovados)