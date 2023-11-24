import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/HomePages';

function Router() {
    let routes = [
        {
           path: '/',
           element: <HomePage/>
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

