var num = 1
{
    var num = 2
    console.log('dentro = ',num)
}
//Como são do mesmo escopo, haverá sobrescrita do valor da var
console.log('fora = ', num)