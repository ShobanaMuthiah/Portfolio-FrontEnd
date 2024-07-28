import React, { useState } from 'react';
import { BiLogoMongodb } from 'react-icons/bi';
import { DiHtml5 } from 'react-icons/di';
import { FaGithub, FaStar } from 'react-icons/fa';
import { IoLogoCss3, IoLogoNodejs } from 'react-icons/io';
import { RiBootstrapLine, RiReactjsLine } from 'react-icons/ri';
import { SiPostman, SiTailwindcss } from 'react-icons/si';
import { TbBrandJavascript, TbBrandRedux } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';

const skills = [
  { icon: DiHtml5, name: 'HTML5', color: 'text-orange-500', rating: 5 },
  { icon: IoLogoCss3, name: 'CSS3', color: 'text-sky-500', rating: 5 },
  { icon: TbBrandJavascript, name: 'JavaScript', color: 'text-yellow-300', rating: 5 },
  { icon: RiBootstrapLine, name: 'Bootstrap', color: 'text-purple-500', rating: 5 },
  { icon: RiReactjsLine, name: 'ReactJs', color: 'text-cyan-200', rating: 5 },
  { icon: IoLogoNodejs, name: 'Nodejs', color: 'text-lime-600', rating: 4 },
  { icon: BiLogoMongodb, name: 'MongoDB', color: 'text-green-600', rating: 3 },
  { icon: SiTailwindcss, name: 'Tailwind', color: 'text-sky-400', rating: 4 },
  { icon: TbBrandRedux, name: 'Redux', color: 'text-purple-400', rating: 4 },
];

const tools = [
  { icon: SiPostman, name: 'Postman', color: 'text-orange-400', rating: 5 },
  { icon: FaGithub, name: 'Github', color: 'text-black', rating: 5 },
  { icon: VscVscode, name: 'VS Code', color: 'text-sky-700', rating: 4 },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredTool, setHoveredTool] = useState(null);

  return (
    <div className="text-orange-500">
       <div className="text-sm text-center text-gray-700 mb-4">
        *Hover over the icons to see how proficient I am in each skills.
      </div>
      
      <div className="text-xl text-center mb-4"><b>Skills</b><hr/></div>
      <div className="flex flex-wrap  gap-4 mb-8">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="relative flex items-center justify-center">
                <Icon className={`${skill.color} h-11 w-11 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32`} />
                {hoveredSkill === index && (
                  <div className="absolute inset-0 flex justify-center flex-col items-center rounded-lg backdrop-blur-sm bg-opacity-70 ">
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg text-dark">
                      {skill.name}
                    </div>
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
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div><br/>

      <div className="text-xl text-center mb-4"><b>Tools</b><hr/></div>
      <div className="flex flex-wrap  gap-4">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredTool(index)}
              onMouseLeave={() => setHoveredTool(null)}
            >
              <div className="relative flex items-center justify-center">
                <Icon className={`${tool.color} h-11 w-11 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32`} />
                {hoveredTool === index && (
                  <div className="absolute inset-0 flex justify-center flex-col items-center rounded-lg backdrop-blur-sm bg-opacity-70 ">
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg text-dark">
                      {tool.name}
                    </div>
                    <div className="flex space-x-0">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-6 lg:w-6 ${
                            i < tool.rating ? 'text-yellow-400' : 'text-gray-400'
                          }`}
                        />
                      ))}
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
