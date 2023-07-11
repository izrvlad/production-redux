import './styles/index.scss';
import { useTheme } from 'app/providers/theme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/routes';
import { NavBar } from 'widgets';
import { SideBar } from 'widgets/SideBar/ui/SideBar/SideBar';
import { Suspense } from 'react';

export const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>Loading...</div>}>
                <NavBar />
                <div className="page-wrapper">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
