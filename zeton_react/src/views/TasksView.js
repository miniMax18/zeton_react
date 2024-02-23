import { useParams } from "react-router-dom";

import HomeTemplate from "../components/templates/HomeTemplate";
import MainBox from "../components/atoms/Sections/MainBox";
import Navbar from "../components/structures/Navbar/Navbar";
import CustomSelect from "../components/modules/CustomSelect/CustomSelect";
import Loading from "../components/atoms/Loading/Loading";
import StudentHeader from "../components/structures/StudentHeader/StudentHeader";
import { StyledContainer } from "../components/atoms/Sections/Containers";
import {
  Subheading,
  StyledHeader,
  StyledHeading,
} from "../components/atoms/Heading/Heading";
// funkcje-hooki swr
import { useTasks } from "../api/useTasks";
import { useStudentById } from "../api/useStudentById";

const PointsView = () => {
  let { id } = useParams();

  const { student, isStudentLoading, isStudentError } = useStudentById(id);
  const { tasks, isTasksLoading, isTasksError } = useTasks(id);
  console.log(tasks);

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
        <StyledHeading big>Dodaj punkty</StyledHeading>
      </StyledHeader>
      <MainBox>
        <StyledContainer>
          <Subheading>Otrzymane punkty</Subheading>
          {isTasksLoading && !isTasksError && <Loading />}
          {!isTasksLoading && !isTasksError && (
            <CustomSelect
              title="Wybierz zachowanie"
              data={tasks.filter((task) => task.student === id)}
              btnTitle="Przyznaj punkty"
            />
          )}
        </StyledContainer>
      </MainBox>
      <Navbar />
    </HomeTemplate>
  );
};

export default PointsView;
