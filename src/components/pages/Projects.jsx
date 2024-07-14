import React from "react";
import ProjectNav from "../ProjectNav";
import AllProjectCard from "../AllProjectCard";

const Projects = () => {
    return (
        <div className="flex flex-col items-center pt-40 px-24">
            <span className="flex items-center space-x-4">
                <img
                    src="/photos/project-vector1.png"
                    alt=""
                    className="h-14 w-14"
                />
                <h1 className=" text-3xl font-mono flex">My Projects</h1>
            </span>
            <div className="flex flex-col items-center justify-center mt-6 px-24">
                <ProjectNav />
                <AllProjectCard />
            </div>
        </div>
    );
};

export default Projects;
