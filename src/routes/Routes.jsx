import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Ragister from "../pages/Ragister/Ragister";

import News from "../pages/News/News";
import PrivateRoute from "../Private/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('/news.json')
            },
            {
                path:'/news/:id',
                element:<PrivateRoute><News/> </PrivateRoute> 
            },
            
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/ragister',
                element:<Ragister/>
            }
        ]
    }    
]);

export default router;