import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";


const ContactHome = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_3ltom1h', 'template_08jcyxa', form.current, {
                publicKey: 'SJNgZhAUGmXeGlFXW',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success('Message Send Successfull')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div id="contractHome" className="lg:px-16 py-10 bg-black">
            <h3 className="text-4xl font-bold text-center mb-5 text-white">Contact Me</h3>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div className="bg-gray-300 rounded-xl shadow-md p-9 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl font-bold">Get in Touch</h3>
                    <div className="divider w-52"></div>
                    <div className="space-y-5">
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Name:</label>
                            <br />
                            <input type="text" placeholder="Write your name" className="input input-bordered w-full max-w-xs border-green-600" name="user_name" required />
                            <br />
                            <label>Email:</label>
                            <br />
                            <input type="email" placeholder="Type your Email" className="input input-bordered w-full max-w-xs border-green-600" name="user_email" required />
                            <br />
                            <label>Message:</label>
                            <br />
                            <textarea name="message" className="textarea textarea-bordered w-80 border-green-600" placeholder="Write your message..." required />
                            <br />
                            <button className="btn border-[#3F8E00] bg-[#3F8E00] drop-shadow-xl text-white text-xl">Send Message</button>
                        </form>
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