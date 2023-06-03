import {useCallback, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme} from "./ThemeContext";

const themeDefaultValue = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

export const useTheme = () => {

    const [theme, setTheme] = useState(themeDefaultValue)

    const changeTheme = useCallback((theme:Theme)=>{
        setTheme(theme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
    },[])

    return {
        theme,
        changeTheme
    }
}