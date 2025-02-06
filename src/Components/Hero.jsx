import { FaSquareFacebook } from "react-icons/fa6";
import { FaDownload, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import image from '../assets/image-profile.png';


const Hero = () => {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center lg:px-16 lg:py-20 md:py-10 py-6 bg-black">
            <div className="space-y-7 lg:text-left text-center">
                <h3 className="text-4xl font-bold text-white">I am A Frontend Developer</h3>
                <p className="text-[#9C9C9C] font-semibold">Welcome! I’m a dedicated web developer focused on creating visually appealing, highly functional, and user-centered websites. My mission is to deliver seamless digital experiences that leave a lasting impression. Let’s build something remarkable together.</p>
                <div className="flex space-x-4 lg:justify-start justify-center">
                    <p><a href="https://github.com/mdnasiruddin78" target="_blank"><FaGithub className="text-3xl text-white" /></a></p>
                    <p><a href="https://www.facebook.com/profile.php?id=100056252312818" target="_blank"><FaSquareFacebook className="text-3xl text-blue-700" /></a></p>
                    <p><FaLinkedin className="text-3xl text-blue-500" /></p>
                </div>
                <div>
                    <a href="https://docs.google.com/document/d/1lXXvJ2JbTuhH2XlOS7ZkvEQM_k2R-CyrkU0tvP1k1Zs/edit?usp=sharing" target="_blank"> <button className="btn rounded-md text-white border-none bg-[#3F8E00] px-10 shadow-lg shadow-[#62BA1B] hover:bg-[#3F8E00]"><FaDownload />Download Resume</button></a>
                </div>
            </div>
            <div className="flex lg:justify-end justify-center">
                <img className='lg:w-[350px] w-[250px] rounded-full' src={image} alt="" />
            </div>
        </div>
    );
};

export default Hero;