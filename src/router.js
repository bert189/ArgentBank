
import { createBrowserRouter } from "react-router-dom";
import Template from "./layout/Template";
import HomePage from './pages/HomePage';
import UserPage from "./pages/UserPage";
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Template />,
            children: [
                {
                    path: "",
                    element: <HomePage />
                },
                {
                    path: "user-page",
                    element: <UserPage />
                },
                {
                    path: "*",
                    element: <NotFoundPage />
                }

            ]
        }
    ]
)

export default router;