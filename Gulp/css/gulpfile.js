//1 - Importar Gulp
const gulp = require('gulp')
const series = gulp.series
const sass = require('gulp-sass')
const uglifyCss = require('gulp-uglifycss')
const concat = require('gulp-concat')

// 2-Tranformação de Sass para CSS
function transformaçãoCss()
{
    return gulp.src('src/sass/index.scss')
        .pipe(sass())
        .pipe(uglifyCss({ "uglyComments": true}))
        .pipe(concat('estilo.min.css')) //conforme está no import do index.html
        .pipe(gulp.dest('build/css'))
}

//3 - Copiar arquivo HTML para past build
function copiar()
{
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
}
//3 - Exportar
module.exports.default = series(transformaçãoCss,copiar)