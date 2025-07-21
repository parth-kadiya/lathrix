// src/styles/AboutLathrixStyles.js
import styled from 'styled-components';

/* ——— Shared "How It Works" styles ——— */
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

export const Content = styled.div`
  flex: 1 1 450px;
  color: #fff;
`;

export const SmallLabel = styled.div`
  font-size: 0.875rem;
  color: #ccc;
  margin-bottom: 8px;
  letter-spacing: 1px;
`;

export const Heading = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  color: #FFD700;
  line-height: 1.1;
  margin: 0 0 24px;
`;

export const Description = styled.p`
  font-size: 1.125rem;
  color: #fff;
  margin: 0 0 32px;
  line-height: 1.6;
`;

export const List = styled.ul`
  list-style: disc inside;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 16px;

  strong {
    color: #fff;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1 1 480px;
  max-width: 480px;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  /* yellow glow shadow */
  box-shadow: 0 0 40px rgba(255, 215, 0, 0.8);
`;

export const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

/* ——— New "Who Can Take VANNI?" section ——— */
export const WhoSection = styled.section`
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: space-between;
  background: #101820;
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto 60px;
  gap: 40px;
`;

export const WhoImageWrapper = styled.div`
  flex: 1 1 480px;
  max-width: 480px;
  width: 100%;
  overflow: hidden;
  /* same yellow glow shadow */
  box-shadow: 0 0 40px rgba(255, 215, 0, 0.8);
  /* optional gradient fade if desired—otherwise remove */
  background: radial-gradient(circle at bottom center, transparent 60%, #101820 100%);
  position: relative;
`;

export const WhoStyledImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const WhoContent = styled.div`
  flex: 1 1 450px;
  color: #fff;
`;

export const WhoHeading = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  color: #FFD700;
  line-height: 1.1;
  margin: 0 0 24px;
`;

export const WhoDescription = styled.p`
  font-size: 1.125rem;
  color: #fff;
  margin: 0 0 32px;
  line-height: 1.6;
`;

export const WhoList = styled.ul`
  list-style: disc inside;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  padding: 0;
`;

export const WhoListItem = styled.li`
  margin-bottom: 12px;
`;
