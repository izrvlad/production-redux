import {FC} from "react";
import {ThemeContext} from "./ThemeContext";
import {useTheme} from "./useTheme";


export const ThemeProvider:FC = ({children}) => {
    const {theme, changeTheme} = useTheme()
    return (
        <ThemeContext.Provider value={{theme, setTheme:changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}