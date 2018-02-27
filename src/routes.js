import React from 'react';
import Dashboard from './pages/DashboardPage/DashboardPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';

const routes = [
    {
        path: '/', 
        exact: true,
        main:  () => <Dashboard/>
    },
    {
        path: '/category',
        
        main: () => <CategoryPage/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage/>
    }
    
];

export default routes;