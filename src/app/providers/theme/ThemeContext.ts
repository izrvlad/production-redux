import { createContext } from 'react';

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

interface ITheme {
    theme?:Theme,
    setTheme?:(theme:Theme)=>void
}

export const ThemeContext = createContext<ITheme>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
