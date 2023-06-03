import {BuildConfig} from "./type/config";
import {Configuration} from "webpack-dev-server";


export const buildDevServer = ({port}:BuildConfig):Configuration => {
    return {
        port,
        open:true,
        historyApiFallback:true
    }
}