import styled, { IStyledComponent } from 'styled-components';

type BackgroundTypes = {
  theme: string,
  outline: string,
  disabled: boolean
};
//type Item = [string, boolean, boolean];
//type Dictionary = { [key: string]: Item; }
//Record<string, Item>

const Button: any = styled.button<BackgroundTypes>`
  background-color: ${({ theme, outline, disabled }) => {
    if (outline === "true") {
      return 'transparent';
    } else if (disabled === true) {
      return theme.grey;
    } else {
      return theme.primary;
    }
  }};
  // outline ? "transparent" : theme.primary};
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-transform: uppercase;
  color: ${({ theme, outline }) => (outline ? theme.primary : 'white')};
  border: solid 1px ${({ theme, disabled }) => {
    if (disabled) {
      return 'transparent'
    } else {
      return theme.primary
    }
  }};
  width: 250px;
  height: 50px;
  padding: 17px;
  margin: 10px auto;
  line-height: 16px;
  border-radius: ${({ theme }) => theme.radius};
  letter-spacing: ${({ theme }) => theme.spacing};
  transition: 0.2s;
  cursor: pointer;

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
    width: 208px;
    height: 46px;
    padding: 12px;
  }
`;

export default Button;
