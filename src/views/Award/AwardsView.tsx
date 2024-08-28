import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HomeTemplate from '../../components/templates/HomeTemplate.tsx';
import StudentHeader from '../../components/structures/StudentHeader/StudentHeader.tsx';
import Loading from '../../components/atoms/Loading/Loading.tsx';
import Navbar from '../../components/structures/Navbar/Navbar.tsx';
import { useStudentById } from '../../api/useStudentById.ts';
import Button from '../../components/atoms/Buttons/Button.ts';
import { AWARDS_SUB_ROUTES } from '../../const/routing.const.ts';

const AwardsView = () => {
  const { id } = useParams();
  const { student, isStudentLoading, isStudentError } = useStudentById(id);

  const navigate = useNavigate();

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
      <Button onClick={() => navigate(`.${AWARDS_SUB_ROUTES.add}`)}>
        Dodaj nagrodę
      </Button>
      <Button onClick={() => navigate(`.${AWARDS_SUB_ROUTES.grant}`)}>
        Przyznaj nagrodę
      </Button>
      <Navbar />
    </HomeTemplate>
  );
};

export default AwardsView;
