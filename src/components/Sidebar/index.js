import React from 'react';
import { SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarLink, SidebarMenu, SidebarLinkR } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
          <SidebarLink to='portfolio' onClick={toggle}>Portfolio</SidebarLink>
          <SidebarLinkR to='/CADcollection#WP' onClick={toggle}>CAD</SidebarLinkR>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
