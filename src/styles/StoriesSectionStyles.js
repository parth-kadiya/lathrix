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
  gap: 60px;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }
`;

export const Card = styled.div`
  flex: 1;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 24px;
  line-height: 1.5;
  position: relative;

  &:nth-child(1)::after,
  &:nth-child(2)::after {
    content: '';
    display: none;
    position: absolute;
    top: 10%;
    right: -30px;
    width: 2px;
    height: 80%;
    background: #FFD700;
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
  width: auto;
  max-height: 200px;
  margin: 0 auto;
`;

export const CardText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
`;

export const CenterCard = styled(Card)`
  padding-top: 20px;
`;

export const ProfileCircle = styled.div`
  width: 180px;
  height: 180px;
  border: 6px solid #FFD700;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileName = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-style: italic;
  color: #ccc;
`;

export const QuoteText = styled.blockquote`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: #fff;
  line-height: 1.4;
  margin: 0;
  max-width: 320px;
`;

export const ActionButton = styled.button`
  background: #FFD700;
  color: #101820;
  border: none;
  padding: 16px 32px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(255, 215, 0, 0.6);
  }
  &:focus {
    outline: none;
  }
`;
