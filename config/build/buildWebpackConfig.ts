import {BuildConfig} from "./type/config";
import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildResolve} from "./buildResolve";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";


export const buildWebpackConfig = (options:BuildConfig):webpack.Configuration =>{
    const {
        path,
        mode,
        isDev,
    } = options
    return  {
        entry: path.entry,
        mode:mode,
        output: {
            path: path.dist,
            filename: "[contenthash].js",
            clean:true,
        },
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolve(),
        plugins:buildPlugins(options),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}