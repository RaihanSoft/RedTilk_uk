import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MianLayout/MainLayout";
import L from '../Pages/L'
import Services from '../Pages/Services'
import Reviews from '../Pages/Reviews'
import Blog from '../Pages/Blog'
import Jobs from '../Pages/Jobs'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/l",
                element: <L />
            },
            {
                path: "/services",
                element: <Services />
            },

            {
                path: "/reviews",
                element: <Reviews />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/jobs",
                element: <Jobs />
            },
        ]
    },
]);