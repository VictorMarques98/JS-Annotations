//1- Importar dependencias
const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifyCss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

//2.1 - Definir function HTML
function appHtml()
{
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build'))
}

//2.2 - Definir function CSS
function appCss()
{
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass())
        .pipe(uglifyCss({"uglyComments": true}))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

//2.3 - Definir function Javascript
function appJS()
{
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({ presets: ['ENV']}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

//2.4 - Definir function Img
function appIMG()
{
    return gulp.src('src/assets/imgs/*.*')
        .pipe(gulp.dest('build/assets/imgs'))
}

//Antes de exportar
gulp.task('appHtml',appHtml)
gulp.task('appJS',appJS)
gulp.task('appCss',appCss)
gulp.task('appIMG',appIMG)

//Exportar
module.exports =
    {
        appHtml,
        appCss,
        appJS,
        appIMG
    }