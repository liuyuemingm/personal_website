import React from 'react';
import WP from '../CAD/v_WP';
import { SideContainer, Bubble, Back } from './SideScrollerElements';

const SideScroller = () => {

  return (
    <>
      <SideContainer>
        <Back to="/#portfolio" >
          <p style={{ margin: "12px 0", color: "black" }}>
            Back
          </p>
        </Back>
        <Bubble to='WP'
          smooth={true}
          duration={500}
          spy={true}
          exact="true" />

        <Bubble to='MST'
          smooth={true}
          duration={500}
          spy={true}
          exact="true" />

        <Bubble to='RM'
          smooth={true}
          duration={500}
          spy={true}
          exact="true" />

        <Bubble to='FP'
          smooth={true}
          duration={500}
          spy={true}
          exact="true" />
      </SideContainer>

    </>
  );
};

export default SideScroller;