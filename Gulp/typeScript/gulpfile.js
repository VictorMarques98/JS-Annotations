//1 - Importar Gulp
const gulp = require('gulp')
const series = gulp.series
const ts = require('gulp-typescript')

//2 - Passar configuração do typescript
const tsProject = ts.createProject('tsconfig.json')

//3 - Tranformar TS em JS
function transformacaoTS()
{
    return tsProject.src() //N preciso passar pasta, pois dentro de tsconfig já tem o caminho
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

//4- Exportar
module.exports.default = series(transformacaoTS)