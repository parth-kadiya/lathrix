// src/styles/ResourcesStyles.js
import styled from 'styled-components'
import mobileStyles from './ResourcesMedia'

export const ResourcesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  padding: 80px 40px;
  max-width: 1200px;
  margin: 0 auto;
  color: #fff;
  background: #101820;

  ${mobileStyles.ResourcesContainer}
`

export const Label = styled.div`
  font-size: 0.875rem;
  color: #ccc;
  letter-spacing: 1px;
  text-transform: uppercase;

  ${mobileStyles.Label}
`

export const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 60px;
  align-items: start;

  ${mobileStyles.TopRow}
`

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 16px;
  }

  ${mobileStyles.TextColumn}
`

export const Heading = styled.h2`
  font-size: 4rem;
  font-weight: 900;
  color: #FFD700;
  margin: 0;
  line-height: 1.1;

  ${mobileStyles.Heading}
`

export const Intro = styled.p`
  font-size: 1.25rem;
  font-style: italic;
  margin: 0;
  line-height: 1.6;

  ${mobileStyles.Intro}
`

export const Highlight = styled.p`
  font-size: 1rem;
  color: #FFD700;
  font-weight: 700;
  margin: 50px 0 0;

  ${mobileStyles.Highlight}
`

export const List = styled.ul`
  margin: 32px 0 0;
  padding-left: 1.25rem;
  list-style: disc;

  ${mobileStyles.List}
`

export const ListItem = styled.li`
  margin-bottom: 12px;
  font-size: 1rem;
  line-height: 1.5;

  strong {
    color: #fff;
  }

  ${mobileStyles.ListItem}
`

export const StoryWrapper = styled.div`
  position: relative;
  box-shadow: 0 0 40px rgba(255, 215, 0, 0.8);
  border-radius: 16px;
  overflow: hidden;

  ${mobileStyles.StoryWrapper}
`

export const StoryImage = styled.img`
  display: block;
  width: 100%;
  height: auto;

  ${mobileStyles.StoryImage}
`

export const FooterLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 24px;

  ${mobileStyles.FooterLinks}
`

export const FooterLink = styled.a`
  font-size: 0.875rem;
  color: #FFF;
  text-decoration: underline;

  &:hover {
    color: #FFD700;
  }

  ${mobileStyles.FooterLink}
`
