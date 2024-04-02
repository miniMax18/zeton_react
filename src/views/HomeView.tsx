//import {Home24Px, Person24Px, SentimentVeryDissatisfied24Px, Settings24Px, Trophy} from "../images/icons/dist_/index";
import React from "react";
import { Heading } from "../components/atoms/Heading/Heading";
import { AddButton } from "../components/atoms/Buttons/LightButtons";
import Loading from "../components/atoms/Loading/Loading";
import StudentCard from "../components/modules/StudentCard/StudentCard";
import styled from "styled-components";
import HomeTemplate from "../components/templates/HomeTemplate";
// funkcje-hooki swr
import { useUser } from "../api/useUser";
import { useStudents } from "../api/useStudents";
//import StarSVG from "../images/icons/star.svg";
import ProfileDefaultImage_SVG from "/profile-user.svg";

//import {Trophy} from 
//import FromSVGToDataUri from "../components/utils/FromSVGToDataUri";

const StyledHeadingWrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  max-width: 500px;

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    margin-bottom: 30px;
  }
`;

const StyledHeading = styled(Heading)``;

const StyledUsersWrapper = styled(StyledHeadingWrapper)``;

const StyledVisibleForTest = styled.p`
  position: absolute;
  height: 0;
  margin: 0;
  color: transparent;
  bottom: 0;
  width: 0;
  padding: 0;
  line-height: 0;
`;

type User = { 
    user: any;
    isLoading: boolean;
    isError: any;
};

const HomeView = () => {
  const { user, isLoading, isError }: any = useUser();
  const { students, isStudentsLoading, isStudentsError } = useStudents();

  return (
    <>
      {user && (
        <HomeTemplate>
          <StyledHeadingWrapper>
            <StyledHeading>
              Cześć, {user ? user : "Nieznajomy"}
            </StyledHeading>
            <StyledHeading>wybierz podopiecznego</StyledHeading>
          </StyledHeadingWrapper>
          <StyledUsersWrapper as="section">
            {isStudentsLoading && !isStudentsError && <Loading />}
            {!isStudentsLoading && !isStudentsError && 
              students && (
                <React.Fragment>
                  {students.map((student: { first_name: any; pk: any; }) => (
                    <StudentCard
                      key={student.first_name}
                      name={student.first_name}
                      studentId={student.pk}
                      image={ProfileDefaultImage_SVG}
                    />
                  ))}
                </React.Fragment>
              )
            }
          </StyledUsersWrapper>
          <AddButton>Dodaj podopiecznego</AddButton>
          {/* {
        choosenUser ? <Profile data={choosenUser} /> : <Home data={props.users && props.users} /> 
      } */}
        </HomeTemplate>
      )}
      {isLoading && <Loading />}
      {
        // isError && <Error />
      }
      <StyledVisibleForTest>wybierz podopiecznego</StyledVisibleForTest>
    </>
  );
};

export default HomeView;
