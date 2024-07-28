import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Foot = () => {
    return (
        <footer className=' footer bg-gradient-to-r from-gray-800 via-gray-700 to-blue-900 text-white py-6 shadow-md'>
            <div className=' mx-auto text-center'>
                <h2 className='text-xl font-semibold mb-4'>Connect with me</h2>
                <div className='flex justify-center space-x-6 mb-4'>
                    <a href="linkedin.com/in/shobanamuthiah2002/" target="_blank" className='hover:text-gray-200'>
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/ShobanaMuthiah" target="_blank" className='hover:text-gray-200'>
                        <FaGithub size={24} />
                    </a>
                    <a href="mailto:shobanam222@gmail.com" target="_blank" className='hover:text-gray-200'>
                        <FaEnvelope size={24} />
                    </a>
                </div>
                <p className='mb-2'>© 2024 Shobana. All Rights Reserved.</p>
                <p className='text-gray-200 text-sm'>Designed & Developed with 💖 by Shobana</p>
            </div>
        </footer>
    );
};

export default Foot;
