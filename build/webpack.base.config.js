//vue-loader在15之后需要在webpack.config.js中当插件引入
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: ['babel-polyfill', resolve('src/index.js')],
    resolve: {  //导入的时候不用写拓展名
        extensions: [' ', '.js', '.json', '.vue', '.scss', '.less', '.css']
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [path.resolve('src')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            { test: /\.vue$/, use: 'vue-loader'},
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-3'],
                        plugins: ['transform-runtime']
                    }
                }
            },
            {
                test: /\.(png)|(jpg)|(jpeg)|(gif)|(svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'assets/[hash:8].[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(eot?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: 'assets/[hash:8].[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin(),
        //每次编译前先删除dist
        new CleanWebpackPlugin(['dist'], {
            root: path.join(__dirname, '..')
        }),
    ]
};