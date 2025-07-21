// src/styles/PatientStoriesStyles.js
import styled from 'styled-components';

export const Section = styled.section`
  background: #101820;
  position: relative;
  padding: 80px 20px;
  overflow: hidden;
`;

export const CardsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 60px;
    align-items: center;
  }
`;

export const Card = styled.div`
  flex: 1;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  line-height: 1.5;
  position: relative;

  /* vertical divider between cards on desktop */
  &:nth-child(1)::after,
  &:nth-child(2)::after {
    content: '';
    display: none;
    position: absolute;
    top: 10%;
    right: -20px;
    height: 80%;
    width: 2px;
    background: #00FFD1;
    opacity: 0.3;
  }

  @media (min-width: 769px) {
    &:nth-child(1)::after,
    &:nth-child(2)::after {
      display: block;
    }
  }
`;

export const CardImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;

export const CenterCard = styled(Card)`
  padding-top: 40px;
`;

export const ProfileCircle = styled.div`
  width: 180px;
  height: 180px;
  border: 6px solid #00FFD1;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #101820;
  margin: 0 auto;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileName = styled.div`
  font-size: 0.9rem;
  font-style: italic;
  color: #ccc;
  margin-top: 12px;
`;

export const QuoteText = styled.blockquote`
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  line-height: 1.4;
  margin: 20px 0;
  max-width: 320px;
`;

/* Wrapper to center the button below the cards */
export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 40px;
`;

export const ActionButton = styled.button`
  background: #00FFD1;
  color: #101820;
  border: none;
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  letter-spacing: 0.5px;
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
