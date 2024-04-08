/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/appTheme';

type ChildrenPropsTypes = {
  children: JSX.Element
}

const MainTemplate = ({ children }: ChildrenPropsTypes) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </React.Fragment>
  );
};

export default MainTemplate;
