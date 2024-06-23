import React from 'react';
import { useParams } from 'react-router-dom';
import HomeTemplate, {
  StyledContainer,
} from '../components/templates/HomeTemplate.tsx';
import StudentHeader from '../components/structures/StudentHeader/StudentHeader.tsx';
import Loading from '../components/atoms/Loading/Loading.tsx';
import MainBox from '../components/atoms/Sections/MainBox.ts';
import Navbar from '../components/structures/Navbar/Navbar.tsx';
import CustomSelect from '../components/modules/CustomSelect/CustomSelect.tsx';
import { useStudentById } from '../api/useStudentById.ts';
import { useAwards } from '../api/useAwards.ts';
import {
  StyledHeader,
  StyledHeading,
  Subheading,
} from '../components/atoms/Heading/Heading.ts';

const AwardsView = () => {
  const { id } = useParams();
  const { student, isStudentLoading, isStudentError } = useStudentById(id);
  const { awards, isAwardsLoading, isAwardsError } = useAwards(id);

  return (
    <HomeTemplate>
      {isStudentLoading && !isStudentError && <Loading />}
      {!isStudentLoading && !isStudentError && (
        <StudentHeader
          name={student?.first_name}
          points={student?.total_points}
          studentId={id}
        />
      )}
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
              data={awards?.filter((award) => award.student.toString() === id)}
              btnTitle="Przyznaj nagrodę"
            />
          )}
        </StyledContainer>
      </MainBox>
      <Navbar />
    </HomeTemplate>
  );
};

export default AwardsView;
