import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import { useTheme } from 'app/providers/theme';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { useCallback } from 'react';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?:string;
}

export const ThemeSwitcher = (props:ThemeSwitcherProps) => {
    const { theme, changeTheme, Theme } = useTheme();
    const themeChangeHandler = useCallback(() => {
        changeTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    }, [theme]);
    const { className } = props;
    return (

        <Button onClick={themeChangeHandler} className={classNames(cls.ThemeSwitcher, { [className]: !!className })}>
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};
