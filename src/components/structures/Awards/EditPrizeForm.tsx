import { useState, useEffect } from 'react';
import { AddButton, DeleteButtonText } from '../../atoms/Buttons/LightButtons';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledRow,
} from '../../atoms/Form/Form';
import React from 'react';

type PrizeTypes = {
  value: string | number | readonly string[] | undefined;
  id: number | null;
  name: string;
};

type EditPrizeFormPropsTypes = {
  currentPrize: PrizeTypes;
  setEditing: (init:boolean) => void,
  updatePrize: (id:number | null, prizeState: PrizeTypes) => void
};

const EditPrizeForm = (props: EditPrizeFormPropsTypes): JSX.Element => {
  const [prize, setPrize] = useState<PrizeTypes>(props.currentPrize);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setPrize({ ...prize, [name]: value });
  };

  useEffect(() => {
    setPrize(props.currentPrize);
  }, [props]);

  return (
    <StyledForm onSubmit={(event) => { event.preventDefault(); props.updatePrize(prize.id, prize)}} >
      <StyledLabel>Nagroda</StyledLabel>
      <StyledInput type="text" name="name" value={prize.name} onChange={handleInputChange} />
      <StyledLabel>Punkty</StyledLabel>
      <StyledInput type="number" name="value" value={prize.value} onChange={handleInputChange} />
      <StyledRow>
        <AddButton>Edytuj nagrodę</AddButton>
        <DeleteButtonText onClick={() => props.setEditing(false)}> Anuluj </DeleteButtonText>
      </StyledRow>
    </StyledForm>
  );
};

export default EditPrizeForm;
