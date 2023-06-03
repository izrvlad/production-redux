import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildConfig} from "./type/config";


export const buildLoaders = ({isDev}:BuildConfig):webpack.RuleSetRule[] => {
    const styleLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                isDev ? "style-loader": MiniCssExtractPlugin.loader,

                {
                    loader:"css-loader",
                    options : {
                        modules:{
                            auto:(path:string)=>Boolean(path.includes(".module.")),
                            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                        }
                    }
                },

                "sass-loader",
            ],
        }
    const tsLoader =
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
    return [
        tsLoader,
        styleLoader
    ]
}