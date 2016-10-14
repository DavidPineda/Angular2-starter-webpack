let webpack = require("webpack");
let HtmlWebpackPlugin = require("html-webpack-plugin"); 

module.exports = {
    entry: "./src/app/main.ts",
    output: {
        path: "./dist",
        filename: "app.bundle.js"
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: "ts"}
        ]
    },
    resolve: {
        extensions: ["", ".js", ".ts"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};