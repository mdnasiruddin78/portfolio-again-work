import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import '../Components/index/index.css';


const Navbar = () => {
    return (
        <div className="flex items-center justify-between lg:px-24 px-6 py-2 backdrop-blur">
            <div className="">
                <h3 className="text-xl font-bold hidden lg:flex md:flex gradient-text">THE NASIR</h3>
                <div className="dropdown lg:hidden md:hidden flex">
                    <div tabIndex={0} role="button"><HiMenuAlt1 className='text-3xl text-white' /></div>
                    <ul tabIndex={0} className="dropdown-content menu text-black bg-white font-bold rounded-box z-[1] w-44 p-2">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><a href="#aboutMe"><button>About Me</button></a></li>
                        <li><a href="#mySkills"><button>My Skills</button></a></li>
                        <li><a href="#myProject"><button>My Projects</button></a></li>
                        <li><a href="#contractHome"><button>Contact Me</button></a></li>
                    </ul>
                </div>
            </div>
            <div className="lg:space-x-5 md:space-x-3 lg:flex md:flex hidden text-[#9C9C9C]">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/aboutme">About Me</NavLink>
                <NavLink to="/myskill">My Skills</NavLink>
                <NavLink to="/myproject">My Projects</NavLink>
                <NavLink to="/contact">Contact Me</NavLink>
            </div>
            <div>
                <a href="https://docs.google.com/document/d/1lXXvJ2JbTuhH2XlOS7ZkvEQM_k2R-CyrkU0tvP1k1Zs/edit?usp=sharing" target="_blank"> <button className="btn rounded-md  text-white border-none bg-gradient-to-r from-[#FD6F00] to-[#E46400]"><FaDownload />Download Resume</button></a>
            </div>
        </div>
    );
};

export default Navbar;