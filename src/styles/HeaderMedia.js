// src/styles/HeaderMedia.js
import styled from 'styled-components';

// hide the desktop nav on small screens
export const MobileNav = styled.nav`
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    display: none;
  }
`;

// hamburger/close button, only on mobile
export const ToggleButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #FFD700;         /* theme‑yellow for icons */
  cursor: pointer;
  position: relative;
  z-index: 1100;           /* above the sidebar */

  @media (max-width: 768px) {
    display: block;
  }
`;

// sliding sidebar container
export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${props => (props.open ? '0' : '-75%')};
  width: 75%;
  max-width: 300px;
  height: 100vh;
  background: #101820;
  box-shadow: -4px 0 12px rgba(0,0,0,0.3);
  transition: right 0.3s ease;
  z-index: 1000;           /* below the ToggleButton */

  @media (min-width: 769px) {
    display: none;
  }
`;

// nav inside the sidebar
export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 80px 20px;

  & > * + * {
    margin-top: 16px;
  }
`;
