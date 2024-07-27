import React from 'react';
import apexora from "../assets/project/apexora.png"
import { Button, Card } from 'flowbite-react';
const Projects = () => {
    const project = [
        {
            image:apexora,
            title: "Apexora-Travel planner App",
            about: "A travel planner app is a digital tool that helps users efficiently organize, book, and manage their travel itineraries and plans.",
            tech: "Reactjs, JS, Tailwind, MongoDB, Nodejs",
            code: "https://apexora-travelplanner.netlify.app",
            prev: "https://apexora-travelplanner.netlify.app"
        },
        {
            image:"",
            title: "ldjflkd",
            about: "kdjfkdj dlfjdkfj dkfjkdjfk",
            tech: "Reactjs, JS, Tailwind, MongoDB, Nodejs",
            code: "https://apexora-travelplanner.netlify.app",
            prev: "https://apexora-travelplanner.netlify.app"
        }
    ];

    return (
        <div className="text-white p-8">
            <h1 className="text-3xl text-center font-bold mb-6 about-heading">My Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {project.map((proj, index) => (
                    <Card
                        key={index}
                        className="bg-transparent"
                    >
                      {proj.image && (
                            <img src={proj.image} alt={proj.title} className=" h-48 object-cover mb-1 " />
                        )}
                          <p className=" text-2xl font-bold tracking-tight text-white">{proj.title}</p>
                        <p className=" font-normal text-gray-200">{proj.about}</p>
                        <p className=" font-normal text-gray-200"><strong>Technologies:</strong> {proj.tech}</p>
                        <div className="flex justify-between">
                            {proj.code && <a href={proj.code} target='_blank' ><Button>Code</Button></a>}
                            {proj.prev && <a href={proj.prev} target='_blank' ><Button>Preview</Button></a>}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Projects;
