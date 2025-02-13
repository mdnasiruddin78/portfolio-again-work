import Aboutme from "../Components/Aboutme";
import ContactHome from "../Components/ContactHome";
import Hero from "../Components/Hero";
import MyProjectHome from "../Components/MyProjectHome";
import MySkills from "../Components/MySkills";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";


const Home = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className="w-10/12 mx-auto">
            <header>
                <Hero></Hero>
            </header>
            <section>
                <Aboutme></Aboutme>
            </section>
            <section>
                <MySkills></MySkills>
            </section>
            <section>
                <MyProjectHome></MyProjectHome>
            </section>
            <section>
                <ContactHome></ContactHome>
            </section>
        </div>
    );
};

export default Home;