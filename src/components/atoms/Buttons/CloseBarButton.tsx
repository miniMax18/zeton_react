import styled from "styled-components";
import ARROW_ICON_SVG from "/arrow_back-24px.svg";
import EXIT_ICON_SVG from "/exit.svg";
import React from "react";

interface StyledCloseBarButtonInterface {
  exit: boolean
}

const StyledCloseBarButton: any = styled.button<StyledCloseBarButtonInterface>`
  display: flex;
  background-color: ${({ theme }) => theme.background};
  border: none;
  height: 50px;
  transition: 0.2s;
  // background-image: url( ${({ exit }) => exit ? EXIT_ICON_SVG : ARROW_ICON_SVG});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  font-size: 2rem;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    height: 40px;
  }
`;

const CloseBarButton = ({closePanel}: any) => {

  return <StyledCloseBarButton onClick={() => closePanel('none')}>
    <img src={ARROW_ICON_SVG} alt="arrow_icon"/>
    Powrót
  </StyledCloseBarButton>
}

export default CloseBarButton;
