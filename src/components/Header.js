// src/components/Header.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HeaderContainer,
  Logo,
  NavItem as DesktopNavItem,
} from '../styles/HeaderStyles';
import { ToggleButton, Sidebar, SidebarNav, MobileNav } from '../styles/HeaderMedia';
import logoSrc from '../assets/logo.png';

const Header = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    { name: 'Home', to: '/lathrix' },
    { name: 'Hair Greying', to: '/hair-greying' },
    { name: 'About LÀTHRIX', to: '/about-lathrix' },
    { name: 'Patient Stories', to: '/patient-stories' },
    { name: 'Starting LÀTHRIX', to: '/starting-lathrix' },
    { name: 'Resources', to: '/resources' },
  ];

  return (
    <HeaderContainer>
      <Logo src={logoSrc} alt="LÀTHRIX logo" />

      {/* Desktop nav hidden on mobile */}
      <MobileNav>
        {navItems.map(item => (
          <DesktopNavItem key={item.to} to={item.to} end={item.to === '/lathrix'}>
            {item.name}
          </DesktopNavItem>
        ))}
      </MobileNav>

      {/* hamburger / close button on mobile */}
      <ToggleButton onClick={() => setOpen(o => !o)}>
        {open ? '✕' : '☰'}
      </ToggleButton>

      {/* sliding sidebar */}
      <Sidebar open={open}>
        <SidebarNav>
          {navItems.map(item => (
            <DesktopNavItem
              key={item.to}
              to={item.to}
              end={item.to === '/lathrix'}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </DesktopNavItem>
          ))}
        </SidebarNav>
      </Sidebar>
    </HeaderContainer>
  );
};

export default Header;
