import React from 'react';
import Dashboard from './pages/DashboardPage/DashboardPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import CategoryActionPage from './pages/CategoryPage/CategoryActionPage';

const routes = [
    {
        path: '/dashboard', 
        exact: true,
        main:  () => <Dashboard/>
    },
    {
        path: '/category',
        exact: false,
        main: () => <CategoryPage/>
    },
    {
        path: '/category/add',
        exact: false,
        main: () => <CategoryActionPage/>
    },
    {
        path: '/category/:id/edit',
        exact: false,
        main: ({match}) => <CategoryActionPage match = {match}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage/>
    }
    
];

export default routes;