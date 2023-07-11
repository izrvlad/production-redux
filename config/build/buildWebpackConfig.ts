import webpack from 'webpack';
import { BuildConfig } from './type/config';
import { buildLoaders } from './buildLoaders';
import { buildResolve } from './buildResolve';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (options:BuildConfig):webpack.Configuration => {
    const {
        path,
        mode,
        isDev,
    } = options;
    return {
        entry: path.entry,
        mode,
        output: {
            path: path.dist,
            filename: '[contenthash].js',
            clean: true,
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolve(options),
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
};
