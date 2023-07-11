import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '../routerConfig';

export const AppRouter = () => (
    <div className="content-wrapper">
        <Routes>
            {Object.values(routerConfig).map(({ element, path }) => <Route path={path} element={element} key={path} />)}
        </Routes>
    </div>
);
