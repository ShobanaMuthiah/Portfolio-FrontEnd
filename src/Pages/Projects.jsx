import React, { useEffect, useState } from 'react';
import apexora from "../assets/project/apexora.png";
import auth from "../assets/project/Auth.png";
import mobile from "../assets/project/mobile.png";
import URL from "../assets/project/URL.png";
import { Button, Card } from 'flowbite-react';

const Projects = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    const project = [
        {
            image: apexora,
            title: "Apexora-Travel planner App",
            about: "A travel planner app is a digital tool that helps users efficiently organize, book and plans.",
            tech: "Reactjs, JS, Tailwind, MongoDB, Nodejs",
            code: "https://github.com/ShobanaMuthiah/Travel-Planner-App-FrontEnd",
            prev: "https://apexora-travelplanner.netlify.app"
        },
        {
            image: URL,
            title: "URL Shortener",
            about: "URL shortener is mainly used to help the large size of urls into short url",
            tech: "Reactjs, JS, Tailwind, MongoDB, Nodejs",
            code: "https://github.com/ShobanaMuthiah/URL-Shorten-FrontEnd",
            prev: "https://url-shrinker.netlify.app/"
        },
        {
            image: auth,
            title: "Authentication",
            about: "This is simple authentication process with the sample education platform website",
            tech: "React.js, JS, MongDB",
            code: "https://github.com/ShobanaMuthiah/Authentication_FrontEnd",
            prev: "https://authentication-sample-site.netlify.app/"
        },
        {
            image: mobile,
            title: "Mobile Shopping Cart",
            about: "It is Mobile phone Shopping Carts with a familiar features",
            tech: "React.js, JS, MongoDB",
            code: "https://github.com/ShobanaMuthiah/Mobile-Cart-ContextAPI",
            prev: "https://mobile-cart-context-api.netlify.app/"
        }
    ];

    return (
        <div className={`text-black p-8 ${animate ? 'slide-down-to-up' : ''}`}>
            <h1 className="text-3xl text-center font-bold mb-6 about-heading">My Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {project.map((proj, index) => (
                    <div
                        key={index}
                        className="bg-fuchsia-100 card flex flex-col justify-between p-4"
                    >
                        {proj.image && (
                            <img src={proj.image} alt={proj.title} className="h-48 border-gray-950 border-1 object-cover mb-4" />
                        )}
                        <div>
                            <p className="text-2xl font-bold tracking-tight mb-2">{proj.title}</p>
                            <p className="font-normal mb-2">{proj.about}</p>
                            <p className="font-normal"><strong>Technologies:</strong> {proj.tech}</p>
                        </div>
                        <div className="flex justify-between mt-4">
                            {proj.code && <a href={proj.code} target='_blank'><button className="btn btn-outline-dark">Code</button></a>}
                            {proj.prev && <a href={proj.prev} target='_blank'><button className='btn btn-outline-dark'>Preview</button></a>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
