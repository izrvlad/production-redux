import webpack, { DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildConfig } from './type/config';

export const buildPlugins = ({ path, isDev }:BuildConfig):webpack.WebpackPluginInstance[] => [
    new HtmlWebpackPlugin({
        template: path.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
        __isDev: JSON.stringify(isDev),
    }),
    isDev && new ReactRefreshWebpackPlugin(),

].filter(Boolean);
