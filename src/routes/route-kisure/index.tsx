import { Route } from '../interface';
import { lazy } from 'react';

const routes: Route[] = [
    {
      name: '首页',
      path: '/k/home',
      exact: true,
      component: lazy(() => import('@/containers/container-kisure/home/home')),
      key: 1
    },
    {
      name: 'state和props',
      path: '/k/stateprops',
      exact: true,
      component: lazy(() => import('@/containers/container-kisure/state-props/index')),
      key: 2
    },
    {
      name: 'jsx',
      path: '/k/jsx',
      exact: true,
      component: lazy(() => import('@/containers/container-kisure/jsx/index')),
      key: 3
    },
    {
      name: 'leftCycle',
      path: '/k/leftCycle',
      exact: true,
      component: lazy(() => import('@/containers/container-kisure/life-cycle/index')),
      key: 4
    }
];

export default routes;