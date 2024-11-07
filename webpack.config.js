const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PORT = 9000;

module.exports = {
    entry: {
        index: './src/ts/index.ts',
        calcular: './src/ts/calcular.ts',
        config: './src/ts/config.ts',
        sobre: './src/ts/sobre.ts'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/html/index.html",
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            filename: "calcular.html",
            template: "./src/html/calcular.html",
            chunks: ["calcular"]
        }),
        new HtmlWebpackPlugin({
            filename: "config.html",
            template: "./src/html/config.html",
            chunks: ["config"]
        }),
        new HtmlWebpackPlugin({
            filename: "sobre.html",
            template: "./src/html/sobre.html",
            chunks: ["sobre"]
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        hot: true,
        compress: true,
        port: PORT,
        historyApiFallback: true,
    },
};