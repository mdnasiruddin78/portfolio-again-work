import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Error from "../Components/Error";
import Home from "../Pages/Home";
import DetailsPage from "../Pages/DetailsPage";
import ContactHome from "../Components/ContactHome";


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
                path: "/contact",
                element: <ContactHome></ContactHome>,
            },
            {
                path: "/projectDetail/:id",
                element: <DetailsPage></DetailsPage>,
                loader: () => fetch('/projects.json')
            }
        ]
    },
]);

export default router;