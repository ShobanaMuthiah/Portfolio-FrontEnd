
import React from 'react';
import anime from "../assets/Images/MERN GIF.gif"
const About = () => {
    return (
        <div className=' bg-black  text-white '>
          <div className='text-2xl text-center about-heading'>About ME!!!</div>
            <div className="row  items-center justify-center min-h-screen  row-span ">

            <div className="content col ">
            <b> Hello!</b><br/><br/>
I'm <b>SHOBANA</b>, an accomplished <b>Full Stack Developer</b> with a profound enthusiasm for the <b> MERN stack</b>. 
I hold a Bachelor of Science degree in <b>Computer Science</b> from the esteemed Government Art College for Women in Sivagangai. 
Following my graduation, I advanced my expertise by undertaking a comprehensive <b>MERN Stack Web Development</b> course at GUVI, solidifying my proficiency in modern web technologies.
<br/><br/>Born on December 15, 2002, in Sivagangai, I am bilingual in <b> Tamil</b> and <b>English</b>.
My professional journey is fueled by a passion for <b>designing and coding</b>, where I excel in creating sophisticated and user-centric web applications.
My commitment to continuous learning and excellence drives me to stay abreast of the latest industry trends and innovations.
With a keen eye for detail and a dedication to delivering high-quality solutions, I am poised to contribute effectively to dynamic development teams and ambitious projects. 
I am eager to leverage my skills and knowledge to make a significant impact in the field of web development.
  
            </div>
            <div className="anime col">
                <img src={anime} alt="anime" />
            </div>
            </div>
        </div>
    );
};

export default About;