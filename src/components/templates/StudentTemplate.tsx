import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../atoms/Buttons/Button';
import StudentHeader from '../structures/StudentHeader/StudentHeader';
import { AWARDS_SUB_ROUTES, SUB_ROUTES_NAME } from '../../const/routing.const';

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
};

const StudentTemplate = ({ name, points }: StudentTemplateProps) => {
  const navigate = useNavigate();

  return (
    <>
      <StudentHeader name={name} points={points} />
      <StyledButtonsGroup>
        <Button onClick={() => navigate(`.${SUB_ROUTES_NAME.tasks}}`)}>Dodaj punkty</Button>
          <Button onClick={() => navigate(`.${SUB_ROUTES_NAME.awards}${AWARDS_SUB_ROUTES.grant}`)} outline={'true'}>Przyznaj nagrodę</Button>
          <Button onClick={() => navigate(`.${SUB_ROUTES_NAME.consequences}`)} outline={'true'}>Daj konsekwencję</Button>
      </StyledButtonsGroup>
    </>
  );
};

export default StudentTemplate;
