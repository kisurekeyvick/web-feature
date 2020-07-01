import { Route } from '../interface';
import { lazy } from 'react';

const routes: Route[] = [
    {
        name: '首页',
        path: '/k/home',
        exact: true,
        component: lazy(() => import('@/containers/container-kisure/home/home')),
        key: 1
    }
];

export default routes;