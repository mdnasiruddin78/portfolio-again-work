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
        <div id="contractHome" className="py-20">
            <h3 className="text-4xl font-bold text-center mb-5 text-white">Contact Me</h3>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div className="rounded-xl shadow-md lg:p-9 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                    <h3 className="text-[#959595] text-xl font-bold">Get in Touch</h3>
                    <div className="divider w-52"></div>
                    <div className="space-y-5">
                        <form ref={form} onSubmit={sendEmail}>
                            <label className="text-[#959595]">Name:</label>
                            <br />
                            <input type="text" placeholder="Write your name" className="input input-bordered w-full border bg-[#1b1b1b] focus:border-white text-white" name="user_name" required />
                            <br />
                            <label className="text-[#959595]">Email:</label>
                            <br />
                            <input type="email" placeholder="Type your Email" className="input input-bordered w-full bg-[#1b1b1b] focus:border-white text-white" name="user_email" required />
                            <br />
                            <label className="text-[#959595]">Message:</label>
                            <br />
                            <textarea name="message" className="textarea textarea-bordered w-full bg-[#1b1b1b] focus:border-white text-white" placeholder="Write your message..." required />
                            <br />
                            <button className="rounded-md border-2 border-[#959595] text-[#959595] p-3">Send Message</button>
                        </form>
                    </div>
                </div>
                <div className="bg-[#1b1b1b] rounded-xl shadow-md lg:p-9 p-3 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white">Get in Touch</h3>
                    <div className="divider w-52"></div>
                    <div className="space-y-5">
                        <div className="flex space-x-4 items-center">
                            <FaLocationDot className="text-white text-2xl" />
                            <p className="text-xl text-white">Chittagong, Bangladesh</p>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <MdMail className="text-white text-2xl" />
                            <p className="text-xl text-white">nasiruddinanik54@gmail.com</p>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <FaPhoneAlt className="text-white text-2xl" />
                            <p className="text-xl text-white">+8801828775478</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactHome;