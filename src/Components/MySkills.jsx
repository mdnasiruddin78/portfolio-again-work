import html from '../assets/html-5-CKyDEyeN.png';
import css from '../assets/css-3-bLrZJUBe.png';
import tailwind from '../assets/tailwind-css-ccILFQbJ.png';
import javascript from '../assets/js-Bu6ZFjaT.png';
import react from '../assets/React.webp';
import firebase from '../assets/firebase-DgpsA1pK.png';
import node from '../assets/nodejs.png';
import mongodb from '../assets/mongodb.png';
import express from '../assets/express.png';
import Marquee from 'react-fast-marquee';


const MySkills = () => {
    return (
        <div className='lg:px-16'>
            <div className="space-y-2 mb-5">
                <h3 className="text-4xl font-bold text-center">My Skills</h3>
                <p className="text-center text-gray-500">Skills and what i am learning</p>
            </div>
            <Marquee autoFill={true} pauseOnHover={true} speed={100} className='bg-gray-300 p-5'>
                <p className='text-xl font-bold mr-5'>Frontend |</p>
                <div className='items-center w-60 h-40 rounded-md bg-orange-100 mr-5'>
                    <div className='flex justify-center items-center'>
                        <img className='w-16 mt-10' src={html} alt="" />
                    </div>
                    <p className='font-bold text-center'>HTML5</p>
                </div>
                <div className='items-center w-60 h-40 rounded-md bg-blue-100 mr-5'>
                    <div className='flex justify-center items-center'>
                        <img className='w-16 mt-10' src={css} alt="" />
                    </div>
                    <p className='font-bold text-center'>CSS3</p>
                </div>
                <div className='items-center w-60 h-40 rounded-md bg-blue-100 mr-5'>
                    <div className='flex justify-center items-center'>
                        <img className='w-16 h-9 rounded-md mt-12' src={tailwind} alt="" />
                    </div>
                    <p className='font-bold text-center'>Tailwind Css</p>
                </div>
                <div className='items-center w-60 h-40 rounded-md bg-yellow-100 mr-5'>
                    <div className='flex justify-center items-center'>
                        <img className='w-16 rounded-md mt-10' src={javascript} alt="" />
                    </div>
                    <p className='font-bold text-center'>Javascript</p>
                </div>
                <div className='items-center w-60 h-40 rounded-md bg-blue-200 mr-5'>
                    <div className='flex justify-center items-center'>
                        <img className='w-16 rounded-md mt-10' src={react} alt="" />
                    </div>
                    <p className='font-bold text-center'>React</p>
                </div>
                <div className='items-center w-60 h-40 rounded-md bg-orange-200 mr-5'>
                    <div className='flex justify-center items-center'>
                        <img className='w-16 rounded-md mt-10' src={firebase} alt="" />
                    </div>
                    <p className='font-bold text-center'>Firebase</p>
                </div>
                <p className='text-xl font-bold mr-5'>Backend |</p>
                <div className='items-center w-60 h-40 rounded-md bg-green-200 mr-5'>
                    <div className='flex justify-center items-center'>
                        <img className='w-16 rounded-md mt-12' src={node} alt="" />
                    </div>
                    <p className='font-bold text-center'>Node.Js</p>
                </div>
                <div className='items-center w-60 h-40 rounded-md bg-green-300 mr-5'>
                    <div className='flex justify-center items-center'>
                        <img className='w-20 rounded-md mt-6' src={mongodb} alt="" />
                    </div>
                    <p className='font-bold text-center'>MongoDb</p>
                </div>
                <div className='items-center w-60 h-40 rounded-md bg-gray-500 mr-5'>
                    <div className='flex justify-center items-center'>
                        <img className='w-16 rounded-md mt-10' src={express} alt="" />
                    </div>
                    <p className='font-bold text-center'>Express.Js</p>
                </div>
            </Marquee>
        </div>
    );
};

export default MySkills;