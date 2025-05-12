import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout"
import Home from "../Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import OrderList from "../components/dashboardComponents/client/OrderList";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";

const Router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    },
    {
        path:"/dashboard",
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:"orderList",
                element:<OrderList></OrderList>
            }
        ]
    }
])

export default Router;
