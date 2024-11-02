const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PORT = 9000;

module.exports = {
    entry: "./src/ts/index.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/html/index.html",
            chunks: ["index"]
        }),
        // new HtmlWebpackPlugin({
        //     filename: "sobre.html",
        //     template: "./src/html/sobre.html",
        //     chunks: ["sobre"]
        // })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: PORT
    }
}