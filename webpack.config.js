let webpack = require("webpack");
let HtmlWebpackPlugin = require("html-webpack-plugin"); 

module.exports = {
    entry: "./src/app/main.ts",
    output: {
        //path: "./dist",
        path: __dirname + "/__build__",
        publicPath: "__build__/"
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