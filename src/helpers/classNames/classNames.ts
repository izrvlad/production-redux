

type classNamesFnType = (cls:string, mode:{[key:string]:boolean}, restClasses:string[])=>string

export const classNames:classNamesFnType = (cls,mode, restClasses)=>{
    return [
        cls,
        ...restClasses,
        ...Object.entries(mode).filter(value=>value[1]).map(value=>value[0])
    ].join(" ")
}