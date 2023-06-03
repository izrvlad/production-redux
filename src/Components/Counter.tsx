import {useState} from "react";

import classes from "./Counbter.module.scss"


export const Counter = () => {
    const [count, setCount] = useState(0)



    return <div className={classes.green}>
        <h1>{count}</h1>
        <button onClick={()=>setCount((prev)=>prev + 1)}>Add</button>
    </div>
}