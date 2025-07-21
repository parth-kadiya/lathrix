import React from 'react';
import {
  Section,
  Content,
  Heading,
  Text,
  Buttons,
  Button,
  PortraitWrapper,
  PortraitImage
} from '../styles/ExploreLathrixStyles';

import groupImg from '../assets/group.png';

const ExploreLathrix = () => (
  <Section>
    <Content>
      <Heading>Explore LÀTHRIX</Heading>
      <Text>
        LÀTHRIX is a transformative treatment option for patients living<br/>
        with acne. Designed with precision, LÀTHRIX helps patients achieve<br/>
        clear skin in just 9 weeks. Learn how LÀTHRIX could offer you<br/>
        long‑lasting relief.
      </Text>
      <Buttons>
        <Button>About LÀTHRIX</Button>
        <Button>Starting LÀTHRIX</Button>
      </Buttons>
    </Content>

    <PortraitWrapper>
      <PortraitImage src={groupImg} alt="LÀTHRIX Patients" />
    </PortraitWrapper>
  </Section>
);

export default ExploreLathrix;
