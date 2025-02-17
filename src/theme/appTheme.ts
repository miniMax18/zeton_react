export type ThemeTypes = {
  background?: string;
  grey: string;
  primary: string;
  radius: string;
  spacing: string;
  regular: string;
  bold: string;
  fontSize: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  mediaMaxSize: {
    xs: string;
  };
};

export const theme: ThemeTypes = {
  background: '#ffffff',
  grey: '#d8d8d8',
  primary: '#4169e1',
  radius: '4px',
  spacing: '1.25px',
  regular: '300',
  bold: '700',
  fontSize: {
    xxs: '1rem',
    xs: '1.2rem',
    sm: '1.6rem',
    md: '2.1rem',
    lg: '2.4rem',
    xl: '3rem',
  },
  mediaMaxSize: {
    xs: '599.9px',
  },
};
