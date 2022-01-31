import React, { useState } from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import Profile from '../components/Profile';
import Resume from '../components/Resume';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Profile />
      <About />
      <Resume />
      <Footer />
    </>
  );
};

export default Home;
