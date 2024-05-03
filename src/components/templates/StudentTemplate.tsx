import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../atoms/Buttons/Button';
import StudentHeader from '../structures/StudentHeader/StudentHeader';
import { ROUTE_NAME } from '../../const/routing.const';
import TasksBar from '../structures/Tasks/TasksBar';
import React from 'react';

const StyledButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;

type StudentDataTypes = {
  name: string | null;
  points: number | null;
  image: string | null;
};

const StudentTemplate = ({ name, points, image, studentId }: any) => {
  const [actualPanel, setActualPanel] = useState('none');
  const [studentData, setStudentData] = useState<StudentDataTypes | {}>({
    name: null,
    points: null,
    image: null,
  });

  const handlePanel = (event: any) => {
    setActualPanel(event);
  };
  //TODO review
  useEffect(() => {
    const obj = {};
    const newObj = {
      name: name || null,
      points: points || null,
      image: image || null,
    };
    Object.assign(obj, newObj);
    console.log(newObj);
    setStudentData(obj);
  }, [name, points, image]);

  return (
    <>
      <StudentHeader name={name} points={points} />
      <StyledButtonsGroup>
        <Button onClick={() => handlePanel('tasks')}>Dodaj punkty</Button>
        {/* <Link to={ROUTE_NAME.tasks.replace(':id', studentId)}>
          <Button onClick={() => handlePanel('tasks')}>Dodaj punkty</Button>
        </Link> */}
        <Link to={ROUTE_NAME.awards.replace(':id', studentId)}>
          <Button outline={'true'} onClick={() => handlePanel('awards')}>
            Przyznaj nagrodę
          </Button>
        </Link>
        <Link to={ROUTE_NAME.consequences.replace(':id', studentId)}>
          <Button outline={'true'} onClick={() => handlePanel('consequences')}>
            Daj konsekwencję
          </Button>
        </Link>
      </StyledButtonsGroup>
      <TasksBar
        panel={actualPanel}
        handlePanel={handlePanel}
        studentData={studentData}
      />
    </>
  );
};

export default StudentTemplate;
