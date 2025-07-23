// src/styles/HeroStyles.js
import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  0% { text-shadow: 0 0 8px #00FFD1; }
  100% { text-shadow: 0 0 20px #00FFD1; }
`;

export const HeroSection = styled.section`
  height: 80vh;
  background: #101820;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: visible;
  padding: 0 32px;    /* ← desktop side padding */
`;

export const HeroText = styled.div`
  text-align: center;
  font-weight: 900;
  color: #00FFD1;

  & > div {
    font-size: 5rem;
  }
`;

export const Highlighted = styled.div`
  font-size: 2.5rem;
  background: linear-gradient(135deg, #FFD700, #FFC300, #FFB700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;

export const GlowText = styled.div`
  font-size: 4.5rem;
  animation: ${glow} 1.5s ease-in-out infinite alternate;
`;

export const DecorativeCircle = styled.div`
  position: absolute;
  width: ${p => p.size};
  height: ${p => p.size};
  border-radius: 50%;
  background: rgba(0, 255, 209, ${p => p.opacity || 0.1});
  top: ${p => p.top || 'auto'};
  bottom: ${p => p.bottom || 'auto'};
  left: ${p => p.left || 'auto'};
  right: ${p => p.right || 'auto'};
  pointer-events: none;
  z-index: 10;
`;
