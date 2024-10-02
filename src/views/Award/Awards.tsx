import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/atoms/Loading/Loading.tsx';
import { useAwards } from '../../api/Award/useAwards.ts';
import AwardsContainer from './AwardsContainer.tsx';
import AwardsList from './AwardsList.tsx';

const Awards = () => {
  const { id } = useParams();
  const { awards, isAwardsLoading, isAwardsError } = useAwards(id);

  if (isAwardsLoading)
    return (
      <AwardsContainer>
        <Loading />
      </AwardsContainer>
    );

  if (isAwardsError)
    return (
      <AwardsContainer>
        <div>
          Wystąpił błąd podczas wczytywania danych, proszę odświeżyć stronę.
        </div>
      </AwardsContainer>
    );

  return (
    <AwardsContainer>
      {awards ? 
      <AwardsList awards={awards} /> 
      : 
      <div> Brak nagród. </div> 
      }
    </AwardsContainer>
  );
};

export default Awards;
