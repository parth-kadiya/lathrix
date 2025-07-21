import styled from 'styled-components';

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
`;

export const Heading = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  color: #FFD700;
  line-height: 1.1;
  margin: 0 0 24px;
`;

export const Text = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  margin: 0 0 32px;
`;

export const FactsTitle = styled.h3`
  font-size: 1.25rem;
  color: #FFD700;
  margin-bottom: 16px;
`;

export const List = styled.ul`
  list-style: disc inside;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 12px;

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
`;

export const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
