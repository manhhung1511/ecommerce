import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/HomePages';
import Login from '../components/Login';
import Register from '../components/Register';
import Infor from '../components/Infor';
import ProductDetail from '../components/ProductDetail';
import Cart from '../components/Cart';
import Buy from '../components/Buy';

function Router() {
    let routes = [
        {
           path: '/',
           element: <HomePage/>
        },
        {
            path: '/infor',
            element: <Infor/>
        },
        {
            path: '/detail',
            element: <ProductDetail/>
        },
        {
            path: '/cart',
            element: <Buy/>
        }
    ];

    const router = createBrowserRouter([
        {
            element: <RootLayout />,
            children: routes
        }
    ])

    return { router }
}

export default Router

