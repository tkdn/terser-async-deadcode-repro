const { resolve } = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

const env = process.env.NODE_ENV;

/** @type import("webpack").Configuration */
/** @see https://qiita.com/akameco/items/e12377e55e379d29636e */
module.exports = {
    mode: env || "development",
    devtool: "inline-source-map",
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: resolve(__dirname, ".build"),
    },
    resolve: {
        extensions: [".ts"],
    },
    module: {
        rules: [
        {
            test: /\.ts$/,
            use: "babel-loader",
            exclude: /node_modules/
        }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(env || "development"),
        }),
    ],
    optimization: {
        minimizer: env ? [
            new TerserPlugin(),
        ] : [],
    },
};
