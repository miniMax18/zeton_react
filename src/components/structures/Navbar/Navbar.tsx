//import { Home24Px, Person24Px, SentimentVeryDissatisfied24Px, Settings24Px, Trophy } from "../../../images/icons/dist_";
//import FromJSXElementToDataUri from "../../utils/FromSVGToDataUri";
//import Home24PxSVG from "../../../images/icons/home-24px.svg";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import NavButton from "../../modules/NavButton/NavButton";
import Home24PxSVG from "/home-24px.svg";
import TrophySVG from "/trophy.svg";
import SentimentVeryDissatisfied24PxSVG from "/sentiment_very_dissatisfied-24px.svg";
import Person24PxSVG from "/person-24px.svg";
import Settings24PxSVG from "/settings-24px.svg";
import React from "react";
import { JSX } from 'react/jsx-runtime';
import { ThemeTypes } from "../../../theme/appTheme";


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

interface StyledNavbarInterface {
  theme: ThemeTypes
}

const StyledNavbar = styled.div<StyledNavbarInterface>`
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

const Home24PxSVG_ = styled.svg`
background-image: url(./home-24px.svg)

`;

const Navbar = (): JSX.Element => {
  let { id } = useParams();
  //console.log(`${id}`);


  //Example of usage another option to implement image below:
  //import FromJSXElementToDataUri from "../../utils/FromSVGToDataUri";
  //import {Home24Px, Person24Px, SentimentVeryDissatisfied24Px, Settings24Px, Trophy} from "../../../images/icons/dist_/index";
  //<NavButton link={`/${id}/settings`} image={FromJSXElementToDataUri(<Settings24Px/>)} text="Ustawienia" />
  return (
    <StyledNavbar>
      <NavButton link={`/${id}`} image={Home24PxSVG} text="Home" />
      <NavButton link={`/${id}/awards`} image={TrophySVG} text="Nagrody" /> 
      <NavButton link={`/${id}/consequences`} image={SentimentVeryDissatisfied24PxSVG} text="Konsekwencje" />
      <NavButton link={`/${id}/info`} image={Person24PxSVG} text="Info" />
      <NavButton link={`/${id}/settings`} image={Settings24PxSVG} text="Ustawienia" />
    </StyledNavbar>
  );
};

export default Navbar;
