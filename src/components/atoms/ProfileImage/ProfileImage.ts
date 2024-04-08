import styled from "styled-components";
import { ThemeTypes } from "../../../theme/appTheme";

interface ProfileImageInterface {
  theme: ThemeTypes
}

//background-image: url(${(image: any) => image.src});
const ProfileImage = styled.img<ProfileImageInterface>`
  
  height: 80px;
  width: 80px;
  margin-right: 10%;
  z-index: 9;

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    height: 60px;
    width: 60px;
  }
`;

export default ProfileImage;
