import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        The driving force of our current generation is technology. As part of these generation, it is a challenge upon me to bring a technology that will better impact the world. You either follow technology or technology follows you there let's come and build a better future technology
        
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;