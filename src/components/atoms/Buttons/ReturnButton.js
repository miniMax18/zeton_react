import styled from "styled-components";
import ARROW_ICON from "../../../images/icons/dist/ArrowBack24Px";
import EXIT_ICON from "../../../images/icons/dist/Exit";
const EXIT_ICON_ = styled(EXIT_ICON)``;
const ARROW_ICON_ = styled(ARROW_ICON)``;
const ReturnButton = styled.button`
  background-color: ${({ theme }) => theme.background};
  border: none;
  height: 50px;
  width: 50px;
  transition: 0.2s;
  background-image: url( ${({ exit }) => exit ? EXIT_ICON() : ARROW_ICON()});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    height: 40px;
    width: 40px;
  }
`;

export default ReturnButton;