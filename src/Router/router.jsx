import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Error from "../Components/Error";
import Home from "../Pages/Home";
import Contract from "../Components/Contract";
import Myproject from "../Components/Myproject";


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
                element: <Contract></Contract>,
            },
            {
                path: "/project",
                element: <Myproject></Myproject>,
            }
        ]
    },
]);

export default router;