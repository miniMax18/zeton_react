import React from 'react';
import { useParams } from 'react-router-dom';
import StudentTemplate from '../components/templates/StudentTemplate';
import HomeTemplate from '../components/templates/HomeTemplate';
import Navbar from '../components/structures/Navbar/Navbar';
import Loading from '../components/atoms/Loading/Loading';
import { useStudentById } from '../api/useStudentById';

const StudentView = () => {
  const { id } = useParams();
  const { student, isStudentLoading, isStudentError } = useStudentById(id);

  if (isStudentLoading) return <Loading />;
  if (isStudentError) return <h1>Błąd wyświetlania studenta</h1>;

  return (
    <HomeTemplate>
      {student && student.first_name && (
        <StudentTemplate
          name={student.first_name}
          points={student.total_points}
        />
      )}
      <Navbar />
    </HomeTemplate>
  );
};

export default StudentView;
