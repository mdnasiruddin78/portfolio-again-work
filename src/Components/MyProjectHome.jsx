import { useEffect, useState } from "react";
import Card from "./Card";


const MyProjectHome = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className="lg:px-16">
            <div className="mb-5 space-y-2 text-center">
                <h3 className="text-2xl font-bold">My Projects</h3>
                <p className="text-gray-500">Few projects, these has unique design</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
                {
                    projects.map(project => <Card key={project.id} project={project}></Card>)
                }
            </div>
        </div>
    );
};

export default MyProjectHome;