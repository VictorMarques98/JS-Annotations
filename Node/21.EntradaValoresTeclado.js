//Receber entrada de valores dentro do próprio terminal

const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo)
{
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
}
else
{   //entrar com dados
    process.stdout.write('Informe o seu nome ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n',"")

        process.stdout.write(`Fala ${nome}`)
        process.exit()
    })
}
