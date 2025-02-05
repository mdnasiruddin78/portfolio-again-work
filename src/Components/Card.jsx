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
                <p className="text-[#9C9C9C]">{challenges}...</p>
                <div className="card-actions">
                    <Link to={`/projectDetail/${id}`} className='btn rounded-md text-white border-[#3F8E00] bg-[#3F8E00] stroke-[#62BA1B]'>View Details <CgDetailsMore  className="font-bold"/></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;