// src/styles/StartingLathrixPageStyles.js
import styled from 'styled-components';

export const PageContainer = styled.div`
  background: #101820;
  color: #fff;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

/* ——— Title block ——— */
export const SectionLabel = styled.div`
  font-size: 0.875rem;
  color: #ccc;
  letter-spacing: 1px;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  color: #FFD700;
  margin: 0 0 16px;
  line-height: 1.1;
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  font-style: italic;
  color: #fff;
  margin: 0;
  line-height: 1.6;
`;

/* ——— Timeline images ——— */
export const TimelineImage = styled.img`
  width: 100%;
  max-width: 800px;
  display: block;
  margin: 0 auto;
  border-radius: 24px;
  /* exactly the same glow as SupportCard */
  box-shadow: 0 0 40px rgba(255, 215, 0, 0.8);
`;

/* ——— Support programs block ——— */
export const SupportSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const SupportTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 900;
  color: #FFD700;
  margin: 0;
`;

export const SupportSubtitle = styled.p`
  font-size: 1rem;
  color: #fff;
  max-width: 800px;
  text-align: center;
  line-height: 1.6;
  margin: 0;
`;

export const SupportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  width: 100%;
  justify-items: center;
`;

export const SupportCard = styled.div`
  background: #2f353a;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 0 40px rgba(255, 215, 0, 0.8);
  width: 100%;
  max-width: 280px;

  img {
    width: 100%;
    display: block;
  }
`;

export const ResourcesButton = styled.button`
  background: #FFD700;
  color: #101820;
  border: none;
  border-radius: 50px;
  padding: 16px 32px;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4);
  transition: all 0.35s ease;
  margin-top: 20px;

  &:hover {
    background: #FFC300;
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 6px 18px rgba(255, 215, 0, 0.6);
  }

  &:focus {
    outline: none;
  }
`;
