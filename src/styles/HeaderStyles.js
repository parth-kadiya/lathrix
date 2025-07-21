// src/styles/HeaderStyles.js
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  position: relative;           /* allow ToggleButton to layer above */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #101820;
  padding: 16px 32px;
`;

export const Logo = styled.img`
  height: 60px;
`;

// reuse NavLink styling
export const NavItem = styled(NavLink)`
  background: linear-gradient(135deg, #FFD700, #FFC300, #FFB700);
  color: #101820;
  border: none;
  padding: 10px 20px;
  font-weight: 700;
  font-size: 0.875rem;
  border-radius: 50px;
  cursor: pointer;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 10px rgba(255, 215, 0, 0.3);
  transition: all 0.35s ease;
  text-decoration: none;

  &.active {
    background: #00FFD1;
    color: #000;
    box-shadow: 0 0 8px #00ffd1, 0 0 16px #00ffd1;
  }

  &:hover:not(.active) {
    background: linear-gradient(135deg, #FFC300, #FFD700, #FFF380);
    color: #000;
    transform: scale(1.03) translateY(-2px);
    box-shadow: 0 6px 18px rgba(255, 215, 0, 0.5);
  }

  &.active:hover {
    background: #00FFD1;
    box-shadow: 0 0 12px #00FFD1, 0 0 24px #00FFD1;
  }

  &:focus {
    outline: none;
  }
`;
