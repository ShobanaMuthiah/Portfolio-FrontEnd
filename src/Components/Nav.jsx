import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

const Nav = () => {
    return (
        <div className=''>
            
              

    <Navbar fluid rounded>
      <NavbarBrand  href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">My Portfolio </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" >
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/about">
          About
        </NavbarLink>
        <NavbarLink as={Link} to="/projects">Projects</NavbarLink>
        <NavbarLink as={Link} to="/contact">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  
  

        </div>
    );
};

export default Nav;
