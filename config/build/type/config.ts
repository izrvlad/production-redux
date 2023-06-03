
type buildModeType = "development" | "production"

interface BuildPath {
    entry:string,
    dist:string,
    html:string
}
export interface IEnv {
    mode:buildModeType,
    port:number
}

export interface BuildConfig {
    mode:buildModeType,
    path:BuildPath,
    isDev:boolean,
    port:number

}