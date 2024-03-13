/* eslint-disable react/prop-types */
//import {PropTypes}  from "react/prop-types"
import { Link } from "react-router-dom";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import ProfileImage from "../../atoms/ProfileImage/ProfileImage";
import styled from "styled-components";
import DEFAULT_IMAGE from "../../../images/icons/dist/ProfileUser";

const StyledStudentCard = styled(Link)`
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

const StyledName = styled(Paragraph)`
  text-transform: capitalize;
  margin: 0;
  color: black;
`;

const StudentCard = ({ name, studentId, image }) => {
  return (
    <StyledStudentCard to={studentId}>
      <ProfileImage style={{background: image? image: DEFAULT_IMAGE}} />
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
