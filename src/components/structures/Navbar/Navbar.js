import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import NavButton from "../../modules/NavButton/NavButton";
import {Home24Px, Person24Px, SentimentVeryDissatisfied24Px, Settings24Px, Trophy} from "../../../images/icons/dist/index";
import FromSVGToDataUri from "../../utils/FromSVGToDataUri";
//import {css} from "styled-components";

///const StyledExampleCss = ({property1, property2, property3}) => {
///  return css`
///  position: fixed;
///  top: 0;
///  left: 0;
///  width: 80px;
///  height: 100%;
///  background-color: #4f4e3a;
///  display: flex;
///  flex-direction: column;
///  align-items: center;
///  z-index: 99;
///  `;
///};

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 100%;
  background-color: #4f4e3a;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 99;

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    top: auto;
    bottom: 0;
    width: 100%;
    height: 56px;
    flex-direction: row;
  }
`;

const Navbar = () => {
  let { id } = useParams();
  console.log(`${id}`);
  return (
    <StyledNavbar>
      <NavButton link={`/${id}`} image={FromSVGToDataUri(<Home24Px/>)} text="Home" />
      <NavButton link={`/${id}/awards`} image={FromSVGToDataUri(<Trophy/>)} text="Nagrody" /> 
      <NavButton link={`/${id}/consequences`} image={FromSVGToDataUri(<SentimentVeryDissatisfied24Px/>)} text="Konsekwencje" />
      <NavButton link={`/${id}/info`} image={FromSVGToDataUri(<Person24Px/>)} text="Info" />
      <NavButton link={`/${id}/settings`} image={FromSVGToDataUri(<Settings24Px/>)} text="Ustawienia" />
    </StyledNavbar>
  );
};

export default Navbar;
