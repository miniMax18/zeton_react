import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../atoms/Buttons/Button';
import StudentHeader from '../structures/StudentHeader/StudentHeader';
import { ROUTE_NAME } from '../../const/routing.const';
import TasksView from '../../views/TasksView.tsx';

const StyledButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;

type StudentTemplateProps = {
  name: string;
  points: number;
  studentId: string;
};

const StudentTemplate = ({ name, points, studentId }: StudentTemplateProps) => {
  const navigate = useNavigate();

  const onClickAddPoints = () => {
    navigate('./tasks');
  };

  return (
    <>
      <StudentHeader name={name} points={points} />
      <StyledButtonsGroup>
        <Button onClick={onClickAddPoints}>Dodaj punkty</Button>
        <Link to={ROUTE_NAME.awards.replace(':id', studentId)}>
          <Button outline={'true'}>Przyznaj nagrodę</Button>
        </Link>
        <Link to={ROUTE_NAME.consequences.replace(':id', studentId)}>
          <Button outline={'true'}>Daj konsekwencję</Button>
        </Link>
      </StyledButtonsGroup>
      <TasksView />
    </>
  );
};

export default StudentTemplate;
