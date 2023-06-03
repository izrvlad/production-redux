import {Link, Route, Routes} from "react-router-dom";
import {Counter} from "./Components/Counter";

import "./styles/index.scss"
import {MainPageAsync} from "./pages/MainPage/MainPageAsync";
import {AboutPageAsync} from "./pages/AboutPage/AboutPageAsync";
import {Suspense, useContext} from "react";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {classNames} from "./helpers/classNames/classNames";

export const App = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    return (
            <div className={classNames("app", {test:true, f:false}, [theme])}>
                <button onClick={()=>setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)}>Toogle theme</button>
                <Link to={"/Main"}>Main</Link>
                <Link to={"/About"}>About</Link>
                <Link to={"/Counter"}>Counter</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={"/Main"} element={<MainPageAsync/>}/>
                        <Route path={"/About"} element={<AboutPageAsync/>}/>
                        <Route path={"/Counter"} element={<Counter/>}/>
                    </Routes>
                </Suspense>
            </div>
    )
}