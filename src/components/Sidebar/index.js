import React from 'react';
import { SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarLink, SidebarMenu } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
          <SidebarLink to='resume' onClick={toggle}>Resume</SidebarLink>
          <SidebarLink to='porfolio' onClick={toggle}>Portfolio</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
