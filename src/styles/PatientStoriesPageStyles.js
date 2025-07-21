// src/styles/PatientStoriesPageStyles.js
import styled from 'styled-components';

/* ——— Proven Results block styles ——— */
export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  background: #101820;
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;
`;

export const LeftContent = styled.div`
  flex: 1 1 450px;
  color: #fff;
`;

export const Label = styled.div`
  font-size: 0.875rem;
  color: #ccc;
  margin-bottom: 8px;
  letter-spacing: 1px;
`;

export const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  color: #FFD700;
  line-height: 1.1;
  margin: 0 0 24px;
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  font-style: italic;
  color: #fff;
  margin: 0 0 16px;
  line-height: 1.6;

  sup {
    font-size: 0.75rem;
    vertical-align: super;
  }
`;

export const CaptionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
`;

export const Caption = styled.span`
  font-size: 1rem;
  color: #E18FFF;
  font-weight: 600;
`;

export const Arrow = styled.span`
  margin-left: 16px;
  font-size: 1.5rem;
  color: #E18FFF;
  transform: translateY(2px);
`;

export const RightContent = styled.div`
  flex: 1 1 400px;
  max-width: 400px;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 40px rgba(255, 215, 0, 0.8);
`;

export const MockupImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: #E18FFF;
  background: rgba(255, 255, 255, 0.6);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    background: rgba(255, 255, 255, 0.8);
  }
`;

/* ——— “Hear from Patients Like You” nav + video styles ——— */
export const TestimonialsSection = styled.section`
  background: #101820;
  padding: 60px 20px 100px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const TestHeading = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  color: #FFD700;
  text-align: center;
  margin-bottom: 40px;
`;

export const TestNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
`;

export const TestButton = styled.button`
  background: ${({ bg }) => bg};
  color: #101820;
  border: none;
  border-radius: 40px;
  width: 280px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(255, 215, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ButtonImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 8px;
`;

export const ButtonLabel = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

export const VideoSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const VideoWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 0 40px rgba(255, 215, 0, 0.8);
`;

export const VideoPlayer = styled.video`
  display: block;
  width: 100%;
  height: auto;
  background: #000;
`;
