import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildConfig} from "./type/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = ({path}:BuildConfig):webpack.WebpackPluginInstance[] => {
    return  [
        new HtmlWebpackPlugin({
            template:path.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        })
    ]
}