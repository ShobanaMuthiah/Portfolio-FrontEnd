import React, { useState } from 'react';
import { BiLogoMongodb } from 'react-icons/bi';
import { DiHtml5 } from 'react-icons/di';
import { FaGithub } from 'react-icons/fa6';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoNodejs } from 'react-icons/io5';
import { RiBootstrapLine, RiReactjsLine } from 'react-icons/ri';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandJavascript, TbBrandRedux } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';

const skills = [
  { icon: RiBootstrapLine,name:"Bootstrap", color: 'text-purple-500', rating: 4 },
  { icon: RiReactjsLine,name:"ReactJs", color: 'text-cyan-200', rating: 5 },
  { icon: IoLogoNodejs, color: 'text-lime-600', rating: 4 ,name:"Nodejs"},
  { icon: BiLogoMongodb, color: 'text-green-600', rating: 3,name:"MongoDB" },
  { icon: TbBrandJavascript, color: 'text-yellow-300', rating: 5,name:"JavaScript" },
  { icon: DiHtml5, color: 'text-orange-500', rating: 5,name:"HTML5" },
  { icon: IoLogoCss3, color: 'text-sky-500', rating: 4,name:"CSS3" },
  { icon: SiTailwindcss, color: 'text-sky-400', rating: 4,name:"Tailwind" },
  { icon: FaGithub, color: 'text-black', rating: 3 ,name:"Github"},
  { icon: TbBrandRedux, color: 'text-purple-400', rating: 4,name:"Redux" },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="text-white ">
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="relative group "
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="relative flex items-center justify-center">
                <Icon className={`${skill.color} h-11 w-11 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32`} />
                {hoveredSkill === index && (
                  <div className="absolute inset-0 flex justify-center flex-col items-center rounded-lg backdrop-blur-sm bg-opacity-70 ">
                    <div className="flex space-x-0">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-6 lg:w-6 ${
                            i < skill.rating ? 'text-yellow-400' : 'text-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg text-dark">
                      {skill.name}
                    </div>
                  </div>
                  
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
