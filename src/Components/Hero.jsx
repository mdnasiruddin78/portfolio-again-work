import { FaSquareFacebook } from "react-icons/fa6";
import { FaDownload, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import image from '../assets/profile.jpg';
import '../Components/index/index.css';
import vector from '../assets/Vector.png';


const Hero = () => {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center lg:py-20 md:py-10 py-6">
            <div className="space-y-4 lg:text-left text-center relative">
                <h3 className="text-xl text-[#707070]">Hi I am</h3>
                <h3 className="text-2xl font-bold text-[#959595]">MD.NASIR UDDIN ANIK</h3>
                <h3 className="text-4xl font-bold text-white gradient-front">A Frontend Developer</h3>
                <p className="text-[#9C9C9C] font-semibold">I’m focused on creating visually appealing, highly functional, and user-centered websites. My mission is to deliver seamless digital experiences that leave a lasting impression. Let’s build something remarkable together.</p>
                <div className="flex space-x-4 lg:justify-start justify-center">
                    <p><a href="https://github.com/mdnasiruddin78" target="_blank"><FaGithub className="text-2xl text-[#BABABA] border border-[#FFFFFF] rounded-full h-12 w-12 p-2"/></a></p>
                    <p><a href="https://www.facebook.com/profile.php?id=100056252312818" target="_blank"><FaSquareFacebook className="text-2xl text-[#BABABA] border border-[#FFFFFF] rounded-full h-12 w-12 p-2" /></a></p>
                    <p><a href="#" target="_blank"><FaLinkedin className="text-2xl text-[#BABABA] border border-[#FFFFFF] rounded-full h-12 w-12 p-2" /></a></p>
                </div>
                <div className="flex lg:justify-start justify-center">
                    <a href="https://docs.google.com/document/d/1lXXvJ2JbTuhH2XlOS7ZkvEQM_k2R-CyrkU0tvP1k1Zs/edit?usp=sharing" target="_blank"> <div className="rounded-md border-2 border-[#959595] text-[#959595] flex items-center space-x-2 w-60 justify-center p-3"><span><FaDownload /></span><span>Download Resume</span></div></a>
                </div>
                <img className="absolute w-[500px] top-0" src={vector} alt="" />
            </div>
            <div className="flex lg:justify-end justify-center">
                <img className='lg:w-[350px] w-[250px] rounded-full' src={image} alt="" />
            </div>
        </div>
    );
};

export default Hero;