import React from 'react';
import { useParams } from 'react-router-dom';
import HomeTemplate from '../../components/templates/HomeTemplate.tsx';
import StudentHeader from '../../components/structures/StudentHeader/StudentHeader.tsx';
import Loading from '../../components/atoms/Loading/Loading.tsx';
import Navbar from '../../components/structures/Navbar/Navbar.tsx';
import { useStudentById } from '../../api/useStudentById.ts';
import Button from '../../components/atoms/Buttons/Button.ts';

const AwardsView = () => {
  const { id } = useParams();
  const { student, isStudentLoading, isStudentError } = useStudentById(id);

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
      <Button>Dodaj nagrodę</Button>
      <Button>Przyznaj nagrodę</Button>
      <Navbar />
    </HomeTemplate>
  );
};

export default AwardsView;
