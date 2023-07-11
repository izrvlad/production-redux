import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildConfig, IEnv } from './config/build/type/config';

module.exports = (env:IEnv) => {
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const options:BuildConfig = {
        mode,
        isDev,
        port: env.port || 3000,
        path: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            dist: path.resolve(__dirname, 'dist'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            src: path.resolve(__dirname, 'src'),
        },

    };
    return buildWebpackConfig(options);
};
