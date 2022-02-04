import React, { useState } from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import Portfolio from '../components/Portfolio';
import Profile from '../components/Profile';
import Resume from '../components/Resume';
import Sidebar from '../components/Sidebar';

const CADcollection = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (<>
    <h1> CAD COLLECTION</h1>
  </>);
};

export default CADcollection;

