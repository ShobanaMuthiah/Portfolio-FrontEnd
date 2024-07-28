import React, { useState } from 'react';
import { Avatar, Card } from 'flowbite-react';
import Typewriter from 'typewriter-effect';
import pic from "../assets/Images/pictureofme.jpg";
import Skills from './Skills'; 
import Modal from 'react-modal';
import { ImCancelCircle } from 'react-icons/im';
import { GiBrain } from "react-icons/gi";
import resume from "../assets/Resume/shobana.pdf"
import { BsDownload, BsCheckCircle } from "react-icons/bs";

Modal.setAppElement('#root');

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleDownload = () => {
    setDownloadComplete(true);
  };

  return (
    <div>
       <div className="w-full text-center  p-1">
        <h1 className="text-4xl about-heading font-bold">Welcome to My Portfolio!</h1>
        
      </div>
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
                        .typeString(`<small class='homeAbout text-white'>Let's collaborate and innovate together!</small>`)
                        .start();
                    }}
                    options={{
                      cursor: '',
                    }}
                  />
                </div>
                <div className="flex justify-center mt-4">
                  <button className='btn btn-secondary flex items-center mr-4' onClick={openModal}>
                    <GiBrain className="mr-2" />Insights
                  </button>
                  <a href={resume} download onClick={handleDownload}>
                    <button className='btn btn-secondary text-white flex items-center'>
                      {downloadComplete ? (
                        <>
                          <BsCheckCircle className="mr-2" />Downloaded
                        </>
                      ) : (
                        <>
                          <BsDownload className="mr-2" />Resume PDF
                        </>
                      )}
                    </button>
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
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-500 mb-6">Insights</div>
          <div><ImCancelCircle onClick={closeModal} className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-700"/></div>
        </div>
        <Skills />
       <div className="text-right mt-2">
       <button className="btn btn-Button btn-secondary text-xs sm:text-sm md:text-xl lg:text-2xl" onClick={closeModal}>Close</button>
       </div>
  
      </Modal>

<div className="w-full text-center mt-8 p-4">
<h2 className="text-3xl text-white font-bold">Get in Touch</h2>
<small className=" text-white mt-2">
  Interested in collaborating or have a question?<br/> Reach out to me via email or connect with me on LinkedIn or through this portfolio. I'd love to hear from you!
</small>
<small className=" text-gray-200 ">
  For more details about my work and experience, download my resume or check out my GitHub for the latest projects and contributions. Stay tuned for updates and new projects!
</small>
</div>
    </div>
  );
};

export default Home;
