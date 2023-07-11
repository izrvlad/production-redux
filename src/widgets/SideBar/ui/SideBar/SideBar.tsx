import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { LangSwitcher, ThemeSwitcher } from 'widgets';
import { Button } from 'shared/ui';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?:string;
}

export const SideBar = (props:SideBarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(true);
    return (
        <div className={classNames(cls.SideBar, { [className]: !!className, [cls.collapsed]: collapsed })}>
            <Button onClick={() => setCollapsed((prev) => !prev)}>Toogle</Button>
            <div className={cls.themeSwitcher}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>

        </div>
    );
};
