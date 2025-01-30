import { Link } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";

const Card = ({ project }) => {
    const { id, image, name ,challenges} = project
    return (
        <div className="card group bg-lime-100 rounded-md shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="">
                <img
                    src={image}
                    alt="image"
                    className="rounded-md h-48" />
            </div>
            <div className="p-4 space-y-4">
                <h2 className="card-title font-semibold text-xl">Project Name: {name}</h2>
                <p>{challenges}...</p>
                <div className="card-actions">
                    <Link to={`/projectDetail/${id}`} className='btn rounded-md border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500'>View Details <CgDetailsMore  className="font-bold"/></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;