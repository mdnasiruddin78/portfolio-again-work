import { Link } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";


const Card = ({ project }) => {
    const { id, image, name ,challenges} = project
    return (
        <div className="card bg-[#252525] rounded-md hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="">
                <img
                    src={image}
                    alt="image"
                    className="rounded-md h-48" />
            </div>
            <div className="p-4 space-y-4">
                <h2 className="card-title font-semibold text-xl text-white">Project Name: {name}</h2>
                <p className="text-[#9C9C9C]">{challenges}...</p>
                <div className="card-actions">
                    <Link to={`/projectDetail/${id}`} className='btn rounded-md text-white bg-gradient-to-r from-[#FA6E00] to-[#E60026] border-none'>View Details <CgDetailsMore  className="font-bold"/></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;