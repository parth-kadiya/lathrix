import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: relative;
    overflow: hidden;
    width: 100%;
  }
`;

export const SlidesContainer = styled.div`
  display: flex;
  transition: transform 0.4s ease;
`;

export const Slide = styled.div`
  flex: 0 0 100%;
  width: 100%;

  /* center the card inside each slide */
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const DotContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 16px;
  }
`;

export const Dot = styled.button`
  border: none;
  background: ${({ center }) => (center ? '#ccc' : 'transparent')};
  color: #101820;
  cursor: ${({ center }) => (center ? 'default' : 'pointer')};
  padding: ${({ arrow }) => (arrow ? '4px 12px' : '0')};
  width: ${({ arrow, center }) => (arrow ? 'auto' : center ? '12px' : '0')};
  height: ${({ center }) => (center ? '12px' : 'auto')};
  border-radius: ${({ center }) => (center ? '50%' : '4px')};
  font-size: ${({ arrow }) => (arrow ? '1rem' : '0')};
  transition: all 0.3s ease;

  &:hover {
    ${({ center, arrow }) =>
      !center && arrow ? `background: rgba(16,24,32,0.1);` : ''}
  }
`;
