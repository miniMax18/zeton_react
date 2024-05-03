import styled from 'styled-components';
import PLUS_SVG from '/plus.svg';
import DELETE_SVG from '/delete.svg';
import EDIT_SVG from '/edit.svg';
import type { ThemeTypes } from '../../../theme/appTheme';

interface LightButtonInterface {
  theme: ThemeTypes;
}

const LightButton = styled.button<LightButtonInterface>`
  color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  padding: 10px 15px;
  padding-left: 48px;
  line-height: 26px;
  background-size: 20px;
  background-position: 10px center;
  background-repeat: no-repeat;
  border-radius: ${({ theme }) => theme.radius};
  letter-spacing: ${({ theme }) => theme.spacing};
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
    padding-left: 40px;
    line-height: 26px;
  }
`;

export const AddButton = styled(LightButton)`
  background-image: url(${PLUS_SVG});
`;

export const DeleteButtonText = styled(LightButton)`
  background-image: url(${DELETE_SVG});
`;

export const DeleteButton = styled<any>(LightButton)`
  background-image: url(${DELETE_SVG});
  padding-left: 15px;
`;

export const EditButton = styled(LightButton)`
  background-image: url(${EDIT_SVG});
  padding-left: 15px;
`;
