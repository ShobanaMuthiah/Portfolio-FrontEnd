import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

const Nav = () => {
    return (
        <div className=''>
            <Navbar fluid rounded className='bg-gradient-to-r from-gray-800 via-gray-700 to-blue-900'>
                <NavbarBrand href="/">
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-white">My Portfolio</span>
                </NavbarBrand>
                <NavbarToggle />
                <NavbarCollapse>
                    <NavbarLink 
                        href="/" 
                        className='text-white hover:text-gray-400 hover:underline active:text-gray-500'
                    >
                        Home
                    </NavbarLink>
                    <NavbarLink 
                        as={Link} 
                        to="/about" 
                        className='text-white hover:text-red-700 hover:underline active:text-red-800'
                    >
                        About
                    </NavbarLink>
                    <NavbarLink 
                        as={Link} 
                        to="/projects" 
                        className='text-white hover:text-gray-400 hover:underline active:text-gray-500'
                    >
                        Projects
                    </NavbarLink>
                    <NavbarLink 
                        as={Link} 
                        to="/contact" 
                        className='text-white hover:text-gray-400 hover:underline active:text-gray-500'
                    >
                        Contact
                    </NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </div>
    );
};

export default Nav;
