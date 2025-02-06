import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";


const DetailsPage = () => {

    const data = useLoaderData()
    const { id } = useParams()
    const details = data.find(detail => detail.id == id)
    const { image, name, description, live_link, github_link, technology_use, key_features, challenges, shortcoming_of_the_projects, thinking_and_improving } = details

    return (
        <div className="w-11/12 mx-auto lg:px-16 bg-base-300">
            <div className="card group bg-lime-100 rounded-md shadow-md">
                <div className="">
                    <img
                        src={image}
                        alt="image"
                        className="rounded-md" />
                </div>
                <div className="p-5 space-y-4">
                    <h2 className="card-title font-bold text-2xl">Project Name: {name}</h2>
                    <p><span className="font-bold">Description:</span> <ul className="text-gray-500 ml-5"><li className="list-disc">{description}</li></ul></p>
                    <p><span className="font-bold">Technology_use:</span>
                        {
                            technology_use.map(technology => <ul className="text-gray-500 ml-5"><li key={technology.id} className="list-disc">{technology}</li></ul>)
                        }
                    </p>
                    <p><span className="font-bold">Key_features:</span>
                        {
                            key_features.map(features => <ul className="text-gray-500 ml-5"><li key={features.id} className="list-disc">{features}</li></ul>)
                        }
                    </p>
                    <p><span className="font-bold">Challenges:</span> <ul className="text-gray-500 ml-5"><li className="list-disc">{challenges}</li></ul></p>
                    <p><span className="font-bold">Shortcoming_of_the_projects:</span> <ul className="text-gray-500 ml-5"><li className="list-disc">{shortcoming_of_the_projects}</li></ul></p>
                    <p><span className="font-bold">Thinking_and_improving:</span> <ul className="text-gray-500 ml-5"><li className="list-disc">{thinking_and_improving}</li></ul></p>
                    <div className="space-x-4">
                        <a href={live_link} target="_blank"><button className='btn px-5 rounded-full bg-slate-800 text-xl text-white'><FaLink />Live Link</button></a>
                        <a href={github_link} target="_blank"><button className='btn px-5 rounded-full bg-green-600 text-xl text-white'><IoLogoGithub />
                            GitHub Link</button></a>
                    </div>
                </div>
            </div>
            <Link to={'/'} className='btn mt-5 mb-5 rounded-md border-[#3F8E00] bg-[#3F8E00] stroke-[#62BA1B] text-white'>Go To Home</Link>
        </div>
    );
};

export default DetailsPage;