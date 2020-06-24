//Nome padrão

//Arquivo que será interpretado pelo node

//1 - Importar webpack
const webpack = require('webpack')

// 1.2 - Importar css extract(para transferir css)
const miniCssExtract = require('mini-css-extract-plugin')

//2 - Exportar o obj que representa toda a configuração script do webpack
module.exports = {
    mode:'development', //modo desenvolvimento
    // mode:'production', //modo produção
    entry:'./src/principal.js', //arquivo principal
    output:
        {
            filename:'principal.js', //Nome do arquivo de saida
            path: __dirname + '/public', //Mudar diretório do arquivo principal, agr n mais dist
        },
        plugins:
        [
            new miniCssExtract({
                filename:"estiloFinal.css", //Nomear arquivo css
            })
        ],
    module: //necessário configurar o loader do css
        {
            rules:[{
                // test:/\.css$/, //Para somente arquivos css
                test:/\.s?[ac]ss$/, //Para css, sass ou scss
                use:
                    [   //Necessário baixar essas deps no package Json
                        miniCssExtract.loader, //carregar css, é conflitante com o style-loader
                        // 'style-loader', //Adiciona CSS a DOM, injetando a tag <style>
                        'css-loader', //Interpretar @import,url()...
                        'sass-loader'
                    ]
            }]
        }
}