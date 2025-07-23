// src/components/OurStories.js
import React, { useState, useRef } from 'react';
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
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

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
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const swipeThreshold = 50; // minimum px to count as swipe

  const goPrev = () => {
    if (current > 0) setCurrent(c => c - 1);
  };

  const goNext = () => {
    if (current < lastIndex) setCurrent(c => c + 1);
  };

  const handleTouchStart = e => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = e => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (touchDeltaX.current > swipeThreshold) {
      goPrev();
    } else if (touchDeltaX.current < -swipeThreshold) {
      goNext();
    }
    touchDeltaX.current = 0;
  };

  return (
    <Section>
      <Heading>Our Stories</Heading>
      <Subheading>Tap Start to Explore a LaThrix Transformation</Subheading>

      {/* Desktop grid */}
      <CardsWrapper>
        {stories.map((s, i) => (
          <Card key={i} bg={s.bg}>
            <ImageWrapper bg={s.bg}>
              <img src={s.img} alt={s.title} />
            </ImageWrapper>
            <Content>
              <Title>{s.title}</Title>
              <Tags>
                {s.tags.map((t, idx) => <Tag key={idx}>{t}</Tag>)}
              </Tags>
              <StartButton>Start &gt;</StartButton>
            </Content>
          </Card>
        ))}
      </CardsWrapper>

      {/* Mobile carousel */}
      <CarouselWrapper>
        <SlidesContainer
          style={{ transform: `translateX(-${current * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {stories.map((s, i) => (
            <Slide key={i} bg={s.bg}>
              <Card bg={s.bg}>
                <ImageWrapper bg={s.bg}>
                  <img src={s.img} alt={s.title} />
                </ImageWrapper>
                <Content>
                  <Title>{s.title}</Title>
                  <Tags>
                    {s.tags.map((t, idx) => <Tag key={idx}>{t}</Tag>)}
                  </Tags>
                  <StartButton>Start &gt;</StartButton>
                </Content>
              </Card>
            </Slide>
          ))}
        </SlidesContainer>
      </CarouselWrapper>

      {/* Prev · Next navigation */}
      <DotContainer>
        {current > 0 && (
          <Dot arrow onClick={goPrev}>
            <FiChevronLeft size="1.25em" />
          </Dot>
        )}
        <Dot center />
        {current < lastIndex && (
          <Dot arrow onClick={goNext}>
            <FiChevronRight size="1.25em" />
          </Dot>
        )}
      </DotContainer>
    </Section>
  );
};

export default OurStories;
