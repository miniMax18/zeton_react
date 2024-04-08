import { Link } from "react-router-dom";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import ProfileImage from "../../atoms/ProfileImage/ProfileImage";
import ProfileDefaultImage_SVG from "/profile-user.svg";
import styled from "styled-components";
import React from "react";
import { ThemeTypes } from "../../../theme/appTheme";

interface StyledStudentCardInterface {
  theme: ThemeTypes
}

const StyledStudentCard = styled(Link)<StyledStudentCardInterface>`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  border: solid 1px ${({ theme }) => theme.grey};
  border-radius: ${({ theme }) => theme.radius};
  transition: 0.2s;
  cursor: pointer;
  text-decoration: none;
`;

const StyledName: any = styled(Paragraph)`
  text-transform: capitalize;
  margin: 0;
  color: black;
`;

type PropTypesStudentCard = {
  name: any, 
  studentId: any, 
  image: any
};

const StudentCard = ({ name, studentId, image }: PropTypesStudentCard) => {
  return (
    <StyledStudentCard to={studentId}>
      <ProfileImage src={(image) ? image.toString() : ProfileDefaultImage_SVG} />
      <StyledName big={true}>{name}</StyledName>
    </StyledStudentCard>
  );
};

export default StudentCard;
