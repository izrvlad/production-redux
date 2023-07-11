import { RouteProps } from 'react-router-dom';
import { MainPage } from '../../../pages/MainPage';
import { AboutPage } from '../../../pages/AboutPage';

enum AppRoutes {
    MAIN = 'MAIN',
    ABOUT = 'ABOUT'
}

export const routerPath:Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
};

export const routerConfig :Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        element: <MainPage />,
        path: routerPath.MAIN,
    },
    [AppRoutes.ABOUT]: {
        element: <AboutPage />,
        path: routerPath.ABOUT,
    },
};
