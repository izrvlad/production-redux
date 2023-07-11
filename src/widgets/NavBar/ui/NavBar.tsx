import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?:string;
}

export const NavBar = (props:NavBarProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.NavBar, { [className]: !!className })}>
            <AppLink className={cls.mainLink} to="/">Main</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/About">About</AppLink>
        </div>
    );
};
