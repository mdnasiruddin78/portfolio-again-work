import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Mainlayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className="bg-base-300">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Mainlayout;