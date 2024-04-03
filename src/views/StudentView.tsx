import StudentTemplate from "../components/templates/StudentTemplate";
import HomeTemplate from "../components/templates/HomeTemplate";
import Navbar from "../components/structures/Navbar/Navbar";
import Loading from "../components/atoms/Loading/Loading";
// funkcje-hooki swr
import { useStudentById } from "../api/useStudentById";
import React from "react";

const StudentView = () => {
  const pathId = window.location.pathname.replace("/", "");
  const { student, isStudentLoading, isStudentError } = useStudentById(pathId);
  return (
    <HomeTemplate>
      {console.log(student)}
      {isStudentLoading && !isStudentError && <Loading />}
      {!isStudentLoading && !isStudentError &&
        <StudentTemplate
        name={student?.first_name}
        points={student?.total_points}
        studentId={pathId} image={undefined}        />
      }
      <Navbar />
    </HomeTemplate>
  );
};

export default StudentView;
