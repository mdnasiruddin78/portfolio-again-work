import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";


const Navbar = () => {
    return (
        <div className="flex items-center justify-between lg:px-14 px-6 py-2 bg-[#1B1B1B]">
            <div className="">
                <h3 className="text-2xl font-bold hidden lg:flex md:flex text-[#9C9C9C]">The Nasir</h3>
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
            <div className="space-x-4 font-bold lg:flex md:flex hidden text-[#9C9C9C]">
                <NavLink to="/">Home</NavLink>
                <a href="#aboutMe"><button>About Me</button></a>
                <a href="#mySkills"><button>My Skills</button></a>
                <a href="#myProject"><button>My Projects</button></a>
                <a href="#contractHome"><button>Contact Me</button></a>
            </div>
            <div>
                <a href="https://docs.google.com/document/d/1lXXvJ2JbTuhH2XlOS7ZkvEQM_k2R-CyrkU0tvP1k1Zs/edit?usp=sharing" target="_blank"> <button className="btn rounded-md stroke-2 text-white border-none bg-[#3F8E00] stroke-[#62BA1B] hover:bg-[#3F8E00] hover:shadow-lg hover:shadow-[#62BA1B]"><FaDownload />Download Resume</button></a>
            </div>
        </div>
    );
};

export default Navbar;