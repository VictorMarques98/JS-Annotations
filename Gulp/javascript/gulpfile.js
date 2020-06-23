//Objt = fazer um workflow para concatenar os arquivos dentro da pasta SRC para apenas 1 arquivo

//1 - Importar GULP
const gulp = require('gulp')
const series = gulp.series
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

//2 - Utilizando comandos
function padrao(cb)
{
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, //Comentários nos arquivos não serão transferidos para o arquivo final
            presets:["env"], //Vai pegar o JS mais novo possível para converter para versão mais antiga
        }))
        .pipe(uglify())//Vai minificar td o código(remover espaços,dx td em uma linha)
        .pipe(concat('codigoFinal.min.js'))//Vai concatenar todos os arquivos para gerar esse
        .pipe(gulp.dest('build'))//Onde arquivo final será levado
    return cb()
}

// 3 - Exportando comandos
module.exports.default = series(padrao)