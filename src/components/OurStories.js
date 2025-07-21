// src/components/OurStories.js
import React, { useState } from 'react';
import {
  Section,
  Heading,
  Subheading,
  CardsWrapper,
  Card,
  ImageWrapper,
  Content,
  Title,
  Tags,
  Tag,
  StartButton
} from '../styles/OurStoriesStyles';

import {
  CarouselWrapper,
  SlidesContainer,
  Slide,
  DotContainer,
  Dot
} from '../styles/OurStoriesMedia';

import story1 from '../assets/story1.png';
import story2 from '../assets/story2.png';
import story3 from '../assets/story3.png';
import story4 from '../assets/story4.png';

const stories = [
  { img: story1, title: 'Hear from Real LaThrix Users', tags: ['ANTI-GREYING','PATIENT','TESTIMONIAL'], bg: '#101820' },
  { img: story2, title: 'Say Goodbye to Grey. Naturally.', tags: ['HAIR SCIENCE','STEM CELLS','MELANIN RESTORATION'], bg: '#fff' },
  { img: story3, title: 'Combat Oxidative Stress with Science', tags: ['CLINICAL STUDY','ROS DEFENSE','DARKENYL™'], bg: '#8E6BBF' },
  { img: story4, title: 'Join the LaThrix Repigmentation Journey', tags: ['HAIR CARE','DAILY ROUTINE','PRODUCT USAGE'], bg: '#101820' },
];

const OurStories = () => {
  const [current, setCurrent] = useState(0);
  const lastIndex = stories.length - 1;

  const goPrev = () => setCurrent(c => (c === 0 ? lastIndex : c - 1));
  const goNext = () => setCurrent(c => (c === lastIndex ? 0 : c + 1));

  return (
    <Section>
      <Heading>Our Stories</Heading>
      <Subheading>Tap Start to Explore a LaThrix Transformation</Subheading>

      {/* Desktop grid */}
      <CardsWrapper>
        {stories.map((s,i) => (
          <Card key={i} bg={s.bg}>
            <ImageWrapper bg={s.bg}><img src={s.img} alt={s.title} /></ImageWrapper>
            <Content>
              <Title>{s.title}</Title>
              <Tags>{s.tags.map((t,idx)=><Tag key={idx}>{t}</Tag>)}</Tags>
              <StartButton>Start ></StartButton>
            </Content>
          </Card>
        ))}
      </CardsWrapper>

      {/* Mobile carousel */}
      <CarouselWrapper>
        <SlidesContainer style={{ transform: `translateX(-${current * 100}%)` }}>
          {stories.map((s,i) => (
            <Slide key={i} bg={s.bg}>
              <Card bg={s.bg}>
                <ImageWrapper bg={s.bg}><img src={s.img} alt={s.title} /></ImageWrapper>
                <Content>
                  <Title>{s.title}</Title>
                  <Tags>{s.tags.map((t,idx)=><Tag key={idx}>{t}</Tag>)}</Tags>
                  <StartButton>Start ></StartButton>
                </Content>
              </Card>
            </Slide>
          ))}
        </SlidesContainer>
      </CarouselWrapper>

      {/* Prev · Next navigation */}
      <DotContainer>
        {current > 0 && <Dot arrow onClick={goPrev}>&lt;</Dot>}
        <Dot center />
        <Dot arrow onClick={goNext}>&gt;</Dot>
      </DotContainer>
    </Section>
  );
};

export default OurStories;