import { useCallback, useContext, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../ThemeContext';

export const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = useCallback((theme:Theme) => {
        setTheme(theme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, []);

    return {
        theme,
        changeTheme,
        Theme,
    };
};
