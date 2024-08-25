import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledContainer } from '../../components/templates/HomeTemplate.tsx';
import MainBox from '../../components/atoms/Sections/MainBox.ts';
import {
  StyledHeader,
  StyledHeading,
} from '../../components/atoms/Heading/Heading.ts';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
} from '../../components/atoms/Form/Form.ts';
import Button from '../../components/atoms/Buttons/Button.ts';
import { Award } from './awardTypes.ts';

const AddAward = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState<Award>({ name: '', value: 0 });

  return (
    <>
      <StyledHeader>
        <StyledHeading>Dodaj nagrodę</StyledHeading>
      </StyledHeader>
      <MainBox>
        <StyledContainer>
          <StyledForm
          // onSubmit={() => handleSubmit}
          >
            <StyledLabel htmlFor="name">Nazwa:</StyledLabel>
            <StyledInput
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
              required
            />
            <StyledLabel htmlFor="value">Wartość punktowa:</StyledLabel>
            <StyledInput
              type="number"
              name="value"
              id="value"
              value={formData.value}
              onChange={(event) =>
                setFormData({ ...formData, value: event.target.value})
              }
              required
            />
            {/* {error && <div>Błąd.</div>} */}
            <Button
              type="button"
              // disabled={isMutating}
              // onClick={(event) => handleSubmit(event)}
            >
              Dodaj nagrodę
            </Button>
          </StyledForm>
        </StyledContainer>
      </MainBox>
    </>
  );
};

export default AddAward;
