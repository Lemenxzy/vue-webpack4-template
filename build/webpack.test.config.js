const baseWebpackConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');
const path = require('path');


//合并webpack配置
module.exports = merge(baseWebpackConfig, {
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: {
                    loader: 'istanbul-instrumenter-loader',
                    options: { esModules: true }
                },
                exclude: /node_modules|\.spec\.js$/,
            },
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
    }
});

