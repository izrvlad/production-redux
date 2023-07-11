import { FC, useState } from 'react';
import { Theme, ThemeContext } from './ThemeContext';

export const ThemeProvider:FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>();
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
