import React from 'react';
import { useParams } from 'react-router-dom';
import { StyledContainer } from '../../components/templates/HomeTemplate.tsx';
import Loading from '../../components/atoms/Loading/Loading.tsx';
import MainBox from '../../components/atoms/Sections/MainBox.ts';
import CustomSelect from '../../components/modules/CustomSelect/CustomSelect.tsx';
import { useAwards } from '../../api/Award/useAwards.ts';
import {
  StyledHeader,
  StyledHeading,
  Subheading,
} from '../../components/atoms/Heading/Heading.ts';

const GrantAward = () => {
  const { id } = useParams();
  const { awards, isAwardsLoading, isAwardsError } = useAwards(id);

  return (
    <>
      <StyledHeader>
        <StyledHeading>Przyznaj nagrodę</StyledHeading>
      </StyledHeader>
      <MainBox>
        <StyledContainer>
          <Subheading>Wykorzystane punkty</Subheading>
          {isAwardsLoading && !isAwardsError && <Loading />}
          {!isAwardsLoading && !isAwardsError && (
            <CustomSelect
              title="Wybierz nagrodę"
              data={awards}
              btnTitle="Przyznaj nagrodę"
            />
          )}
        </StyledContainer>
      </MainBox>
    </>
  );
};

export default GrantAward;
