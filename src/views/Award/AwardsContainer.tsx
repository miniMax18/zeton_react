import React from 'react';

import { StyledContainer } from '../../components/templates/HomeTemplate.tsx';
import MainBox from '../../components/atoms/Sections/MainBox.ts';
import {
  StyledHeader,
  StyledHeading,
  Subheading,
} from '../../components/atoms/Heading/Heading.ts';

const AwardsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StyledHeader>
        <StyledHeading>Lista nagród</StyledHeading>
      </StyledHeader>
      <MainBox>
        <StyledContainer>
          <Subheading>Wykorzystane punkty</Subheading>
          {children}
        </StyledContainer>
      </MainBox>
    </>
  );
};

export default AwardsContainer;
