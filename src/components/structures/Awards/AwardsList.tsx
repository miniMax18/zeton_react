import React, { useEffect, useState } from 'react';
import { Heading, Subheading } from '../../atoms/Heading/Heading';
import MainBox from '../../atoms/Sections/MainBox';
import { StyledArticle } from '../../atoms/Sections/Article';
import LiElement, {
  StyledUl,
  StyledDate,
  LiDateElem,
} from '../../atoms/Lists/Lists';
import AddPrizeForm from './AddPrizeForm';
import EditPrizeForm from './EditPrizeForm';

const AwardsList = ({ awards, studentId }: any) => {
  const [prizes, setPrizes] = useState(awards);
  const [editing, setEditing] = useState<boolean>(false);

  const [currentStudent, setCurrentStudent] = useState(studentId);

  const initialFormState = { id: null, name: '', value: '' };
  const [currentPrize, setCurrentPrize] = useState(initialFormState);

  useEffect(() => {
    const filteredPrizes = prizes.filter(
      (prize: any) => prize.student === currentStudent
    );
    setPrizes(filteredPrizes);
  }, []);

  const addPrize = (prize: any) => {
    prize.id = prizes.length + 1;
    setPrizes([...prizes, prize]);
  };
  const deletePrize = (id: any) => {
    setEditing(false);
    setPrizes(prizes.filter((prize: any) => prize.id !== id));
  };

  const updatePrize = (id: any, updatedPrize: any) => {
    setEditing(false);
    setPrizes(
      prizes.map((prize: any) => (prize.id === id ? updatedPrize : prize))
    );
  };

  const editPrize = (prize: any) => {
    // console.log(prize);
    setEditing(true);
    setCurrentPrize({ id: prize.id, name: prize.text, value: prize.points });
  };

  return (
    <MainBox>
      <StyledArticle>
        <Heading>Lista nagród</Heading>
        {awards && (
          <StyledUl>
            {prizes.map((el: any) => {
              const { name, value, id } = el;

              return (
                <LiElement
                  text={name}
                  points={value}
                  key={id}
                  id={id}
                  delete={deletePrize}
                  edit={editPrize}
                />
              );
            })}
          </StyledUl>
        )}
      </StyledArticle>
      <StyledArticle>
        {editing ? (
          <div>
            <Subheading>Edytuj nagrodę</Subheading>
            <EditPrizeForm
              setEditing={setEditing}
              currentPrize={currentPrize}
              updatePrize={updatePrize}
            />
          </div>
        ) : (
          <div>
            <Subheading>Dodaj nagrodę</Subheading>
            <AddPrizeForm addPrize={addPrize} />
          </div>
        )}

        {/* {!flag && (
          <AddButton onClick={() => setFlag(!flag)}>
            Dodaj nową nagrodę
          </AddButton>
        )}
       */}
      </StyledArticle>

      <StyledArticle>
        <Subheading>Otrzymane nagrody</Subheading>
        <StyledUl>
          <LiDateElem>
            <StyledDate>07.10.2021</StyledDate>
            <p>Paczka czipsów</p>
          </LiDateElem>
          <LiDateElem>
            <StyledDate>01.10.2021</StyledDate>
            <p>Wyjście do kina</p>
          </LiDateElem>
        </StyledUl>
      </StyledArticle>
    </MainBox>
  );
};

// const mapStateToProps = (state) => {
//   console.log(state.student);
//   return {
//     name: state.student.first_name + ' ' + state.student.last_name,
//     points: state.student.total_points,
//   };
// };

export default AwardsList;
