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
          {isAwardsError && (
            <div>
              Wystąpił błąd podczas wczytywania danych, proszę odświeżyć stronę.
            </div>
          )}
          {isAwardsLoading && <Loading />}
          {!isAwardsLoading && !isAwardsError && (
            <div>
              {awards?.map((award) => (
                <li key={award.id}>
                  {award.name} <span>{award.value} pkt</span>
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
