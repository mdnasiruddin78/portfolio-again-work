import Aboutme from "../Components/Aboutme";
import ContactHome from "../Components/ContactHome";
import Hero from "../Components/Hero";
import MyProjectHome from "../Components/MyProjectHome";
import MySkills from "../Components/MySkills";


const Home = () => {
    return (
        <div className="max-w-6xl mx-auto p-4">
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