import React from 'react'
import { Redirect } from 'react-router';
const Login = React.lazy(() => import('@pages/Login'))
const Home = React.lazy(() => import('@pages/Home'))
const HomeShow = React.lazy(() => import('@components/HomeShow'))
const Test = React.lazy(() => import('@components/Test'))
const routes = [
  { path: '/', exact: true, component: Login },
  {
    path: '/home',
    component: Home,
    routes: [
      { path: '/home', exact: true, render: () => <Redirect to="/home/home_show" /> },
      { path: '/home/home_show', component: HomeShow },
      { path: '/home/test', component: Test }
    ]
  },
]

export default routes;