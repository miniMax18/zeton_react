import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import React from 'react';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { ThemeTypes } from '../../../theme/appTheme';

interface StyledNavLinkInterface {
  theme: ThemeTypes;
}
interface StyledParagraphInterface {
  theme: ThemeTypes;
}

const StyledNavLink = styled(NavLink)<StyledNavLinkInterface>`
  width: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 12px 10px;
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

const StyledParagraph = styled(Paragraph)<StyledParagraphInterface>`
  text-align: center;
  margin: 0;
  padding-top: 5px;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  display: block;
  overflow: hidden;
  white-space: nowrap;
  width: fit-content;

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    width: 60px;
    text-overflow: ellipsis;
  }
`;

type PropsTypesNavButtom = {
  link: string;
  children: JSX.Element;
  text: string;
};

const NavButton = ({ link, children, text }: PropsTypesNavButtom) => (
  <StyledNavLink to={link}>
    {children}
    <StyledParagraph>{text}</StyledParagraph>
  </StyledNavLink>
);

export default NavButton;
