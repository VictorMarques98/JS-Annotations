// 1 - Importar Gulp
const gulp = require('gulp')

//2 - Configurar function Servidor
const webserver = require('gulp-webserver')

function servidor()
{
    return gulp.src('build')
        .pipe(webserver({
            port:8080,
            open:true,
            livereload:true,
        }))
}

// 3 - function monitorar Arquivos para modificar em tempo real
const watch = require('gulp-watch')
function monitorarArquivos(cb)
{
    watch('src/**/*.html',() => gulp.series('appHtml')())
    watch('src/**/*.scss',() => gulp.series('appCss')())
    watch('src/**/*.js',() => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*',() => gulp.series('appIMG')())
    return cb

}

//Exportar
module.exports =
    {
        monitorarArquivos,
        servidor
    }