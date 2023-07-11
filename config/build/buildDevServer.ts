import { Configuration } from 'webpack-dev-server';
import { BuildConfig } from './type/config';

export const buildDevServer = ({ port }:BuildConfig):Configuration => ({
    port,
    open: true,
    historyApiFallback: true,
    hot: true,

});
