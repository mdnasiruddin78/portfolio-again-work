import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Error from "../Components/Error";
import Home from "../Pages/Home";
import DetailsPage from "../Pages/DetailsPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/projectDetail/:id",
                element: <DetailsPage></DetailsPage>,
                loader: () => fetch('/projects.json')
            },
        ]
    },
]);

export default router;