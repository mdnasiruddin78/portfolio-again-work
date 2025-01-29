import Aboutme from "../Components/Aboutme";
import Hero from "../Components/Hero";


const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <header>
                <Hero></Hero>
            </header>
            <section>
                <Aboutme></Aboutme>
            </section>
        </div>
    );
};

export default Home;