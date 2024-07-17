import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Header from '../layouts/Header'
import Home from '../components/Home'
import Login from '../Auth/Login'
import Signup from '../Auth/Signup'
import CrudMobiles from '../pages/CrudMobiles'

const router = createBrowserRouter([
    {
        path: 'Login',
        element: <Login/>
    },
    {
        path: 'Signup',
        element: <Signup/>
    },
    {
        path: '',
        element: <App />,
        children: [
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'Mobiles/crud',
                element: <CrudMobiles />,
            },           
        ]
    },    
])

export default router