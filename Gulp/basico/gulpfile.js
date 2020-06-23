//1 - Importar GULP
const gulp = require('gulp')
const series = gulp.series
const parallel = gulp.parallel

//2 - Copiar arquivos
function copiar(callback) //callback para notificar gulp que tarefa foi finalizada
{
    //Src = Passar arquivos como parâmetros
    gulp.src('pastaA/*.txt')
    // gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])
        //Pipe = Aplicar transformação nos arquivos passados no src
        .pipe(gulp.dest('pastaDestino'))
    return callback()
}

//2.1 - Criar função arrow
const antes = callback => {console.log('Antes');return callback()}

//2.2 - Função fim
const fim = callback => {console.log('Fim');return callback()}

//3 - Exportar função junto com default(sempre colocar o default)

//3.1 - Exportar função em série(uma atrás da outra)
// module.exports.default = series(antes,copiar,fim)

//3.2 - Exportar função em paralelo(ao mesmo tempo)
module.exports.default = parallel(antes,copiar,fim)