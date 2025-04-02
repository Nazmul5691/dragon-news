

import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts />
    },
    {
        path: '/auth',
        element: <h1>auth</h1>
    }
])

export default routers;