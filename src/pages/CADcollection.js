import React, { useState } from 'react';
import FP from '../components/CAD/y_FP';
import WP from '../components/CAD/v_WP';
import CADs from '../components/CADs';
import Footer from '../components/Footer';
import NavSimple from '../components/NavSimple';
import SideScroller from '../components/SideScroller';
import MST from '../components/CAD/w_MST';
import SD from '../components/CAD/z_SD';
import RM from '../components/CAD/x_RM';

const CADcollection = () => {
  return (
    <div>
      <SideScroller />
      <div style={{ marginRight: "12%" }}>
        <WP />
        <MST />
        <RM />
        <FP />
        <SD />
      </div>
      <Footer />
    </div >
  );
};

export default CADcollection;

