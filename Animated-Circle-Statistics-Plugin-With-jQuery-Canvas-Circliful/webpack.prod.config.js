const { ProvidePlugin } = require("webpack");

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

const libraryName = "circliful";

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: `${libraryName}.js`,
        library: libraryName,
        path: path.resolve(__dirname, "./dist"),
        libraryTarget: "var"
    },
    target: "web",
    mode: "production",
    module: {
        rules: [{
                test: /\.ts$/,
                exclude: ["/node_modules", path.resolve(__dirname, "./test")],
                use: "ts-loader",
            },
            {
                test: /\.ts$/,
                enforce: "pre",
                use: [{
                    loader: "tslint-loader",
                    options: {
                        configFile: "tslint.json",
                    },
                }, ],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: path.resolve(__dirname, "./test"),
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            }
        ],
    },
    optimization: {
        nodeEnv: 'production',
        removeAvailableModules: true,
        minimize: true,
        minimizer: [new TerserPlugin({
            cache: true,
            parallel: true,
            terserOptions: {
                output: {
                    comments: false,
                },
            },
            extractComments: false,
        }), new OptimizeCSSAssetsPlugin()],
    },
    resolve: {
        extensions: [".ts", ".js"],
        modules: ["src", "node_modules"],
    },
    plugins: [
        new ProvidePlugin({
            Promise: "es6-promise-promise",
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                path.join(process.cwd(), 'dist/**/*')
            ],
        }),
        new MiniCssExtractPlugin()
    ],
};