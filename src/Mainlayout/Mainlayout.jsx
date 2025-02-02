import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Mainlayout = () => {
    return (
        <div>
            <nav className="sticky top-0 z-50">
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