import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";


const Navbar = () => {
    return (
        <div className="flex items-center justify-between lg:px-14 px-6 py-2 backdrop-blur">
            <div className="">
                <h3 className="text-2xl font-bold hidden lg:flex md:flex">The Nasir</h3>
                <div className="dropdown lg:hidden md:hidden flex">
                    <div tabIndex={0} role="button"><HiMenuAlt1 className='text-3xl text-black' /></div>
                    <ul tabIndex={0} className="dropdown-content menu text-black bg-white font-bold rounded-box z-[1] w-44 p-2">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/contact">Contact Me</NavLink></li>
                        <li><NavLink to="/project">My Projects</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="space-x-4 font-bold lg:flex md:flex hidden">
                <NavLink to="/">Home</NavLink>
                <a href="#contractHome"><button>Contact Me</button></a>
                <a href="#myProject"><button>My Projects</button></a>
            </div>
            <div>
                <a href="https://docs.google.com/document/d/1lXXvJ2JbTuhH2XlOS7ZkvEQM_k2R-CyrkU0tvP1k1Zs/edit?usp=sharing" target="_blank"> <button className="btn rounded-md border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500"><FaDownload />Download Resume</button></a>
            </div>
        </div>
    );
};

export default Navbar;