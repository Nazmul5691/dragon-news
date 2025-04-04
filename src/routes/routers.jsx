

import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NewsDetails from "../components/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts />,
        children:[
            {
                path: "",
                element: <Navigate to={"/category/01"}></Navigate>
            },
            {
                path:'/category/:id',
                element: <CategoryNews />,
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: '/news/:id',
        element: <PrivateRoute><NewsDetails /></PrivateRoute>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children:[
            {
                path:"/auth/login",
                element: <Login />
            },
            {
                path:"/auth/register",
                element: <Register />
            },

        ]
    }
])

export default routers;