//import {PropTypes}  from "react/prop-types"
//import DEFAULT_IMAGE from "../../../images/icons/dist_/ProfileUser";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import ProfileDefaultImage_SVG from "/profile-user.svg";
import React from "react";

const StyledNavLink = styled(NavLink)`
  width: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 5px;
  transition: 0.2s;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    flex: 1;
    width: 100%;
    margin: 0 5px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  text-align: center;
  margin: 0;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  text-overflow: ellipsis;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  width: 60px;
`;

const StyledIcon = styled.img`
  height: 30px;
  width: 30px;
  outline:none;
  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    height: 20px;
    width: 20px;
  }
`;
type PropsTypesNavButtom = {
  link: any,
  image: any, 
  text: any
}
//<NavButton link={`/${id}/settings`} image={FromJSXElementToDataUri(<Settings24Px/>)} text="Ustawienia" />
//<StyledIcon style={{backgroundImage: image? `url(${image})`:`url(${ProfileDefaultImage_SVG})`,
//                    backgroundRepeat: "no-repeat",
//                    backgroundPosition: "center",
//                    backgroundAttachment: "none",
//                    //borderInline: "ridge",
//                    width: "40px", height: "40px", borderRadius:"5px"}}/>

const NavButton = ({ link, image, text }: PropsTypesNavButtom) => (
  <StyledNavLink to={link}>
    <StyledIcon src={image?image:ProfileDefaultImage_SVG}/>
    <StyledParagraph>{text}</StyledParagraph>
  </StyledNavLink>
);
//NavButton.propTypes = {
//  link: PropTypes.any.isRequired,
//  image: PropTypes.any.isRequired,
//  text: PropTypes.any.isRequired,
//};


export default NavButton;
