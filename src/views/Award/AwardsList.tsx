import React from 'react';
import { useParams } from 'react-router-dom';
import { StyledContainer } from '../../components/templates/HomeTemplate.tsx';
import Loading from '../../components/atoms/Loading/Loading.tsx';
import MainBox from '../../components/atoms/Sections/MainBox.ts';
import { useAwards } from '../../api/Award/useAwards.ts';
import {
  StyledHeader,
  StyledHeading,
  Subheading,
} from '../../components/atoms/Heading/Heading.ts';

const AwardsList = () => {
  const { id } = useParams();
  const { awards, isAwardsLoading, isAwardsError } = useAwards(id);

  return (
    <>
      <StyledHeader>
        <StyledHeading>Lista nagród</StyledHeading>
      </StyledHeader>
      <MainBox>
        <StyledContainer>
          <Subheading>Wykorzystane punkty</Subheading>
          {isAwardsLoading && !isAwardsError && <Loading />}
          {!isAwardsLoading && !isAwardsError && (
           <div>
             {awards?.map((option) => (
                  <li
                    key={option.id}
                  >
                    {option.name} <span>{option.value} pkt</span>
                  </li>
                ))}
           </div>
          )}
        </StyledContainer>
      </MainBox>
    </>
  );
};

export default AwardsList;
