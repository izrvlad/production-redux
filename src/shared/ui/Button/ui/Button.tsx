import { classNames } from 'shared/lib/classNames/classNames';
import React, { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR= 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string;
    theme?:ButtonTheme
}

export const Button:FC<ButtonProps> = React.memo((props) => {
    const {
        className, theme = ButtonTheme.CLEAR, children, ...restProps
    } = props;
    return (
        <button className={classNames(cls.Button, { [className]: !!className }, [cls[theme]])} {...restProps}>
            {children}
        </button>
    );
});
