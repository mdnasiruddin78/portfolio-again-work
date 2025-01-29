import Aboutme from "../Components/Aboutme";
import ContactHome from "../Components/ContactHome";
import Hero from "../Components/Hero";
import MySkills from "../Components/MySkills";


const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <header className="py-7">
                <Hero></Hero>
            </header>
            <section className="py-7">
                <Aboutme></Aboutme>
            </section>
            <section className="py-7">
                <MySkills></MySkills>
            </section>
            <section className="py-7">
                <ContactHome></ContactHome>
            </section>
        </div>
    );
};

export default Home;