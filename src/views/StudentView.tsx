import React from 'react';
import StudentTemplate from '../components/templates/StudentTemplate';
import HomeTemplate from '../components/templates/HomeTemplate';
import Navbar from '../components/structures/Navbar/Navbar';
import Loading from '../components/atoms/Loading/Loading';
import { useStudentById } from '../api/useStudentById';

const StudentView = () => {
  const pathId = window.location.pathname.replace('/', '');
  const { student, isStudentLoading, isStudentError } = useStudentById(pathId);

  if (isStudentLoading) return <Loading />;
  if (isStudentError) return <h1>Błąd wyświetlan studenta</h1>;

  return (
    <HomeTemplate>
      {student && student.first_name && (
        <StudentTemplate
          name={student.first_name}
          points={student.total_points}
          studentId={pathId}
        />
      )}
      <Navbar />
    </HomeTemplate>
  );
};

export default StudentView;
