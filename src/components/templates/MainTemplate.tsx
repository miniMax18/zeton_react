import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/appTheme';

type ChildrenPropsTypes = {
  children: JSX.Element;
};

const MainTemplate = ({ children }: ChildrenPropsTypes): JSX.Element => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </React.Fragment>
  );
};

export default MainTemplate;
