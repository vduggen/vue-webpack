const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

const vueLoaderPlugin = new VueLoaderPlugin();
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "public", "index.html"),
});
const miniCssExtractPlugin = new MiniCssExtractPlugin();

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        compress: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
                loader: "file-loader",
                options: {
                    outputPath: "assets",
                    esModule: false,
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [vueLoaderPlugin, htmlWebpackPlugin, miniCssExtractPlugin],
    resolve: {
        extensions: ["*", ".js", ".vue", ".json"],
    },
    mode: 'development'
}