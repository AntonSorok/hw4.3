const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

console.log(process.env.NODE_ENV)

module.exports = {
    entry: './index.js',
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    devtool:
        process.env.NODE_ENV === 'production'
            ? 'hidden-source-map'
            : 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', ' css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(js)$/,
                use: 'babel-loader',
            },
        ],
    },
    optimization: {
        minimizer: ['...', new CssMinimizerPlugin()],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin()],
}
