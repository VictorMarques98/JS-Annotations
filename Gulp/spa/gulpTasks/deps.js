//1 - Importar gulp e concat
const gulp = require('gulp')
const concat = require('gulp-concat')

//2 - Configurar função de CSS
const uglifyCss = require('gulp-uglifycss')
function depsCss()
{
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifyCss({"uglyComments": false}))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

//3 - Configurar função de Fontes
function depsFonts()
{
    return gulp.src('node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('build/assets/fonts'))
}

//Exportar
module.exports =
    {
        depsCss,
        depsFonts
    }