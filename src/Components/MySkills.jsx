import { ImHtmlFive2 } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import '../Components/index/index.css';


const MySkills = () => {
    return (
        <div id='mySkills' className='py-20'>
            <div className="space-y-2 mb-5">
                <h3 className="text-4xl font-bold text-center text-white">My Skills</h3>
                <p className="text-center text-[#959595]">Skills and what i am learning</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1">
                <div className="bg-[#1b1b1b] py-16 rounded-xl border-2 border-white" data-aos="fade-up" data-aos-duration="3000">
                    <div className="flex justify-center">
                        <ImHtmlFive2 className="text-[#FD6F00] text-7xl text-center" />
                    </div>
                    <p className="text-[#959595] text-xl font-bold text-center">HTML</p>
                </div>
                <div className="bg-[#1b1b1b] py-16 rounded-xl border-2 border-white" data-aos="fade-up" data-aos-duration="3000">
                    <div className="flex justify-center">
                        <SiCss3 className="text-[#FD6F00] text-7xl text-center" />
                    </div>
                    <p className="text-[#959595] text-xl font-bold text-center">CSS</p>
                </div>
                <div className="bg-[#1b1b1b] py-16 rounded-xl border-2 border-white" data-aos="fade-up" data-aos-duration="3000">
                    <div className="flex justify-center">
                        <RiTailwindCssFill className="text-[#FD6F00] text-7xl text-center" />
                    </div>
                    <p className="text-[#959595] text-xl font-bold text-center">TAILWIND CSS</p>
                </div>
                <div className="bg-[#1b1b1b] py-16 rounded-xl border-2 border-white" data-aos="fade-up" data-aos-duration="3000">
                    <div className="flex justify-center">
                        <IoLogoFirebase className="text-[#FD6F00] text-7xl text-center" />
                    </div>
                    <p className="text-[#959595] text-xl font-bold text-center">FIREBASE</p>
                </div>
                <div className="bg-[#1b1b1b] py-16 rounded-xl border-2 border-white" data-aos="fade-up" data-aos-duration="3000">
                    <div className="flex justify-center">
                        <IoLogoJavascript className="text-[#FD6F00] text-7xl text-center" />
                    </div>
                    <p className="text-[#959595] text-xl font-bold text-center">JAVASCRIPT</p>
                </div>
                <div className="bg-[#1b1b1b] py-16 rounded-xl border-2 border-white" data-aos="fade-up" data-aos-duration="3000">
                    <div className="flex justify-center">
                        <FaReact className="text-[#FD6F00] text-7xl text-center" />
                    </div>
                    <p className="text-[#959595] text-xl font-bold text-center">REACT.JS</p>
                </div>
                <div className="bg-[#1b1b1b] py-16 rounded-xl border-2 border-white" data-aos="fade-up" data-aos-duration="3000">
                    <div className="flex justify-center">
                        <FaNodeJs className="text-[#FD6F00] text-7xl text-center" />
                    </div>
                    <p className="text-[#959595] text-xl font-bold text-center">NODE.JS</p>
                </div>
                <div className="bg-[#1b1b1b] py-16 rounded-xl border-2 border-white" data-aos="fade-up" data-aos-duration="3000">
                    <div className="flex justify-center">
                        <SiMongodb className="text-[#FD6F00] text-7xl text-center" />
                    </div>
                    <p className="text-[#959595] text-xl font-bold text-center">MONGODB</p>
                </div>
                <div className="bg-[#1b1b1b] py-16 rounded-xl border-2 border-white" data-aos="fade-up" data-aos-duration="3000">
                    <div className="flex justify-center">
                        <SiExpress className="text-[#FD6F00] text-7xl text-center" />
                    </div>
                    <p className="text-[#959595] text-xl font-bold text-center">EXPRESS.JS</p>
                </div>
            </div>
        </div>
    );
};

export default MySkills;