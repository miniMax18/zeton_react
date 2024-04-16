import React from "react";
import styled from "styled-components";
import { ThemeTypes } from "../../theme/appTheme";

type ActionType = string;

interface StyledActionsTemplateInterface {
  theme: ThemeTypes,
  action: ActionType
};

const StyledActionsTemplate = styled.section<StyledActionsTemplateInterface>`
  position: absolute;
  left: 80px;
  top: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.background};
  flex-direction: column;
  justify-content: flex-start;
  transition: transform 0.8s ease-in-out;
  transform: ${({ action }) =>
    action === "true" ? "translateX(0)" : "translateX(105vw)"};
  padding: 40px;
  z-index: 19;

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    left: 0px;
    padding: 20px;
    transition: transform 0.5s ease-in-out;
  }
`;
interface ActionsTemplateInterface {
    children: JSX.Element[],
    action: ActionType
};

const ActionsTemplate = ({ children, action }: ActionsTemplateInterface): JSX.Element => (
  <StyledActionsTemplate action={action}>{children}</StyledActionsTemplate>
);

export default ActionsTemplate;
