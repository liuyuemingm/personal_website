import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Sidebar from "./components/Sidebar";
import Home from "./pages";
import CADcollection from "./pages/CADcollection";
import React from "react";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CADcollection" element={<CADcollection />} />
      </Routes>
    </Router>
  );
}

export default App;
