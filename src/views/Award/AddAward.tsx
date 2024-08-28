import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
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
  // const { id } = useParams();
  const [formData, setFormData] = useState<Award>({ name: '', value: 0 });

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(event.target.value);
    if (!isNaN(parsedValue)) {
      setFormData({ ...formData, value: parsedValue });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
  };

  return (
    <>
      <StyledHeader>
        <StyledHeading>Dodaj nagrodę</StyledHeading>
      </StyledHeader>
      <MainBox>
        <StyledContainer>
          <StyledForm onSubmit={handleSubmit}>
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
              min="1"
              step="1"
              value={formData.value ? formData.value : ''}
              onChange={onValueChange}
              required
            />
            {/* {error && <div>Błąd.</div>} */}
            <Button
              type="submit"
              // disabled={isMutating}
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
