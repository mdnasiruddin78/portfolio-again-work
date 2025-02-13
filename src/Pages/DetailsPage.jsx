import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import '../Components/index/index.css';


const DetailsPage = () => {

    const data = useLoaderData()
    const { id } = useParams()
    const details = data.find(detail => detail.id == id)
    const { image, name, description, live_link, github_link, technology_use, key_features, challenges, shortcoming_of_the_projects, thinking_and_improving } = details

    return (
        <div className="max-w-6xl mx-auto">
            <div className="card group bg-[#252525] rounded-md shadow-md">
                <div className="">
                    <img
                        src={image}
                        alt="image"
                        className="rounded-md" />
                </div>
                <div className="p-5 space-y-4">
                    <h2 className="card-title font-bold text-2xl text-white">Project Name: {name}</h2>
                    <p><span className="font-bold text-white">Description:</span> <ul className="text-[#959595] ml-5"><li className="list-disc">{description}</li></ul></p>
                    <p><span className="font-bold text-white">Technology_use:</span>
                        {
                            technology_use.map(technology => <ul className="text-[#959595] ml-5"><li key={technology.id} className="list-disc">{technology}</li></ul>)
                        }
                    </p>
                    <p><span className="font-bold text-white">Key_features:</span>
                        {
                            key_features.map(features => <ul className="text-gray-500 ml-5"><li key={features.id} className="list-disc">{features}</li></ul>)
                        }
                    </p>
                    <p><span className="font-bold text-white">Challenges:</span> <ul className="text-[#959595] ml-5"><li className="list-disc">{challenges}</li></ul></p>
                    <p><span className="font-bold text-white">Shortcoming_of_the_projects:</span> <ul className="text-[#959595] ml-5"><li className="list-disc">{shortcoming_of_the_projects}</li></ul></p>
                    <p><span className="font-bold text-white">Thinking_and_improving:</span> <ul className="text-[#959595] ml-5"><li className="list-disc">{thinking_and_improving}</li></ul></p>
                    <div className="space-x-4">
                        <a href={live_link} target="_blank"><button className='btn px-5 rounded-full bg-gradient-to-r from-[#FA6E00] to-[#E60026] border-none text-xl text-white'><FaLink />Live Link</button></a>
                        <a href={github_link} target="_blank"><button className='btn px-5 rounded-full bg-gradient-to-r from-[#FA6E00] to-[#E60026] border-none text-xl text-white'><IoLogoGithub />
                            GitHub Link</button></a>
                    </div>
                </div>
            </div>
            <div className="py-7">
                <Link to={'/'} className='rounded-md border-2 border-[#959595] text-[#959595] p-3'>Go To Home</Link>
            </div>
        </div>
    );
};

export default DetailsPage;