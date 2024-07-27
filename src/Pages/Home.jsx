import React, { useState } from 'react';
import { Avatar, Button, Card } from 'flowbite-react';
import resume from '../assets/Resume/shobana.pdf';
import Typewriter from 'typewriter-effect';
import pic from "../assets/Images/pictureofme.jpg";
import Skills from './Skills'; 
import Modal from 'react-modal';
import { ImCancelCircle } from 'react-icons/im';

Modal.setAppElement('#root');

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="row row-span rounded box p-2">
          <div className="flex col homepage flex-wrap">
            <img className='portfolio-image rounded' src={pic} alt="avatar of Jese" />
          </div>
          <div className="w-full col flex flex-wrap">
            <Card className='carD border-0'>
              <div className="flex flex-col h-full">
                <div className="flex-grow car p-4 pb-0 pt-1">
                  <Avatar img={pic} size="lg" className='flex flex-col justify-start avatar' />
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(`<div class='container animated-light-text-purple'><span class='head'>Hey there! I'm SHOBANA</span></div>`)
                        .pauseFor(500)
                        .changeDelay(25)
                        .typeString(`<div class="animated-light-text mt-1"><span class='web'>WEB DEVELOPER</span> by day, <span class='web'>CODE NINJA</span> by night.</div>`)
                        .pauseFor(500)
                        .changeDelay(25)
                        .typeString(`<div class='about text-white'>I've got a B.Sc in Computer Science and I've mastered the MERN stack at GUVI.<br>
                          I geek out over building amazing web apps with React.js, Node.js, and MongoDB.</div>`)
                        .pauseFor(500)
                        .changeDelay(25)
                        .typeString(`<small class='homeAbout text-white'>Let's make the web a cooler place, one project at a time!</small>`)
                        .start();
                    }}
                    options={{
                      cursor: '',
                    }}
                  />
                </div>
                <div className="flex justify-center">
                  <button className='btn btn-primary' onClick={openModal}>Skills</button>
                  <a href={resume} download={resume}>
                    <button className='btn btn-primary text-white ml-4'>Download Resume PDF</button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Skills Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="flex justify-between">
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-500 mb-6">Skills</div>
          <div><ImCancelCircle onClick={closeModal} className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-700"/></div>
        </div>
        <Skills />
        <Button className="text-xs sm:text-sm md:text-xl lg:text-2xl" onClick={closeModal}>Close</Button>
      </Modal>
    </div>
  );
};

export default Home;
