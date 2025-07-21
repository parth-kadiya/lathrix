import styled, { keyframes } from 'styled-components';

// pulsing glow in teal
const glow = keyframes`
  from { box-shadow: 0 0 0px rgba(0, 255, 209, 0.6); }
  to   { box-shadow: 0 0 40px rgba(0, 255, 209, 0.6); }
`;

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;       /* space content & image evenly */
  background: #101820;
  padding: 80px 20px;
  max-width: 1200px;                     /* center container */
  margin: 0 auto;
`;

export const Content = styled.div`
  flex: 1 1 400px;
  max-width: 550px;
  color: #fff;
`;

export const Heading = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  color: #00FFD1;                        /* switched to teal */
  margin: 0 0 20px;
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 30px;
  color: #fff;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background: #00FFD1;
  color: #101820;
  border: none;
  padding: 14px 28px;                    /* match PatientStories */
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  border-radius: 50px;                   /* pill shape */
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 255, 209, 0.3);
  transition: all 0.35s ease;

  &:hover {
    background: #00e5bb;
    transform: scale(1.05) translateY(-3px);
    box-shadow: 0 6px 18px rgba(0, 229, 187, 0.5);
  }

  &:focus {
    outline: none;
  }
`;

export const PortraitWrapper = styled.div`
  flex: 1 1 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 40px;

  @media(min-width: 768px) {
    margin-top: 0;
  }

  /* teal half‑circle glow behind the group */
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    max-width: 500px;
    height: 60%;
    background: radial-gradient(
      circle at bottom center,
      rgba(0, 255, 209, 0.6) 0%,
      transparent 70%
    );
    border-radius: 50% 50% 0 0;
    z-index: 1;
  }
`;

export const PortraitImage = styled.img`
  position: relative;
  width: 100%;
  max-width: 480px;
  height: auto;
  border-radius: 8px;
  animation: ${glow} 1.8s ease-in-out infinite alternate;
  z-index: 2;
`;
