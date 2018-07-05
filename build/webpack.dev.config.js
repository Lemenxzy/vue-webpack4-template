const baseWebpackConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');
//友好显示错误
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
//vue-loader必引入插件
const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

//合并webpack配置
module.exports = merge(baseWebpackConfig, {
    devServer: {
        contentBase: resolve('dist'),
        historyApiFallback: true,
        //显示在游览器上
        overlay: true,
        //错误日志不显示
        quiet: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.less/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.css/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(), //调用webpack的热更新插件
        //错误友好提示
        new FriendlyErrorsWebpackPlugin({
            clearConsole: true
        }),
        //生产一个html
        new HtmlWebpackPlugin({
            inject: true,
            template: resolve('index.html'),
            //强行寫入html的script标签
            alwaysWriteToDisk: true,
            hash: true
        }),
        //强行寫入本地html
        new HtmlWebpackHarddiskPlugin()
    ]
});

