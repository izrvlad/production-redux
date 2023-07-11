import { ResolveOptions } from 'webpack';
import { BuildConfig } from './type/config';

export const buildResolve = ({ path }:BuildConfig):ResolveOptions => ({
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [path.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
});
