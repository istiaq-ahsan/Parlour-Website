import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout"
import Home from "../Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import OrderList from "../components/dashboardComponents/client/OrderList";

const Router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:"/",
                element:<Home></Home>
            },
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
