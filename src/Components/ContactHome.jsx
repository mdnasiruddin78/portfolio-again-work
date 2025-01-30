import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import * as motion from "motion/react-client"


const ContactHome = () => {

    const box = {
        width: 100,
        height: 100,
        // backgroundColor: "#9911ff",
        borderRadius: 5,
    }
    
    return (
        <div className="lg:px-16">
            <h3 className="text-4xl font-bold text-center mb-5">Contact Me</h3>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div className="bg-gray-300 rounded-xl shadow-md p-9 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl font-bold">Get in Touch</h3>
                    <div className="divider w-52"></div>
                    <div className="space-y-5">
                        <input type="text" placeholder="Write your name" className="input input-bordered w-full max-w-xs border-green-600" />
                        <input type="text" placeholder="Type your Email" className="input input-bordered w-full max-w-xs border-green-600" />
                        <textarea className="textarea textarea-bordered w-80 border-green-600" placeholder="Write your message..."></textarea>
                        <button className="btn bg-yellow-400 text-white text-xl border-2 border-white">Send Message</button>
                    </div>
                </div>
                <div className="bg-blue-200 rounded-xl shadow-md p-9 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl font-bold">Get in Touch</h3>
                    <div className="divider w-52"></div>
                    <div className="space-y-5">
                        <div className="flex space-x-4 items-center">
                            <FaLocationDot className="text-green-500 text-2xl" />
                            <p className="text-xl">Chittagong, Bangladesh</p>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <MdMail className="text-blue-500 text-2xl" />
                            <p className="text-xl">nasiruddinanik54@gmail.com</p>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <FaPhoneAlt className="text-green-600 text-2xl" />
                            <p className="text-xl">+8801828775478</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactHome;