import styled from 'styled-components';

export const Section = styled.section`
  background: #101820;
  padding: 80px 20px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  color: #FFD700;
  margin-bottom: 24px;
`;

export const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #fff;
  max-width: 800px;
  margin: 0 auto 32px;

  strong {
    font-weight: 700;
    color: #fff;
  }
`;

export const Tagline = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  color: #FFD700;
  margin-bottom: 40px;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;

export const ActionButton = styled.button`
  background: #FFD700;
  color: #101820;
  border: none;
  padding: 14px 32px;
  font-size: 1.125rem;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4);
  transition: all 0.35s ease;

  &:hover {
    background: #FFC300;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 6px 18px rgba(255, 215, 0, 0.6);
  }

  &:focus {
    outline: none;
  }
`;
