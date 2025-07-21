// src/styles/OurStoriesStyles.js
import styled from 'styled-components';

export const Section = styled.section`
  background: #FFD700;
  padding: 80px 20px;
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 900;
  color: #101820;
  margin: 0 auto 8px;
`;

export const Subheading = styled.p`
  font-size: 1.1rem;
  color: #7a7a7a;
  margin-bottom: 40px;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Card = styled.div`
  background: ${({ bg }) => bg};
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  & > img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: center;
  }
`;

export const Content = styled.div`
  background: #fff;
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #101820;
  margin: 0 0 12px;
  line-height: 1.3;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
`;

export const Tag = styled.span`
  font-size: 0.7rem;
  color: #8e8e8e;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const StartButton = styled.button`
  align-self: flex-start;
  background: linear-gradient(135deg, #FFD700, #FFC300);
  border: none;
  padding: 8px 20px;
  font-size: 0.9rem;
  font-weight: 700;
  border-radius: 20px;
  color: #101820;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(255,215,0,0.3);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(255,215,0,0.5);
  }

  &:focus {
    outline: none;
  }
`;
