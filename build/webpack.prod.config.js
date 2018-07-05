const baseWebpackConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');
//vue-loader必引入插件
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
//抽取css插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

//合并webpack配置
module.exports = merge(baseWebpackConfig, {
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.less/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader', 'postcss-loader', 'less-loader']
                })
            },
            {
                test: /\.css/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader', 'postcss-loader']
                })
            }
        ]
    },
    plugins: [
        //生产一个html
        new HtmlWebpackPlugin({
            inject: true,
            template: resolve('index.html'),
            //强行寫入html的script标签
            alwaysWriteToDisk: true,
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            }
        }),
        //强行寫入本地html
        new HtmlWebpackHarddiskPlugin(),
        new ExtractTextPlugin('style.css')
    ]
});

