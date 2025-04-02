

import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";
import CategoryNews from "../pages/CategoryNews";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts />,
        children:[
            {
                path: "",
                element: <Navigate to={"/category/1"}></Navigate>
            },
            {
                path:'/category/:id',
                element: <CategoryNews />,
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: '/auth',
        element: <h1>auth</h1>
    }
])

export default routers;