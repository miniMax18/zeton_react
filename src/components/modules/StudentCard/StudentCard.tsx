//import {PropTypes}  from "react/prop-types";
//import DEFAULT_IMAGE from "../../../images/icons/dist_/ProfileUser";
import { Link } from "react-router-dom";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import ProfileImage from "../../atoms/ProfileImage/ProfileImage";
import ProfileDefaultImage_SVG from "/profile-user.svg";
import styled from "styled-components";
import React from "react";

const StyledStudentCard: any = styled(Link)`
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
      <StyledName big>{name}</StyledName>
    </StyledStudentCard>
  );
};
//StudentCard.propTypes = {
//  name: PropTypes.any.isRequired,
//  studentId: PropTypes.any.isRequired,
//  image: PropTypes.any.isRequired,
//};

export default StudentCard;
