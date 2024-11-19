import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../pages/Dashboard.page";
import Detail from "../pages/Detail.page";

export default function Routers() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: '/restorant/:id',
            element: <Detail />
        }
    ])
    
    return (
        <RouterProvider router={router} />
    )
}