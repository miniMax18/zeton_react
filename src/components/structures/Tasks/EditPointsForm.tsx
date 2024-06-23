import React, { useState, useEffect } from 'react';
import { AddButton, DeleteButtonText } from '../../atoms/Buttons/LightButtons';
import {
  StyledInput,
  StyledForm,
  StyledLabel,
  StyledRow,
} from '../../atoms/Form/Form';

type PropsType = {
  setEditing: (e: boolean) => void;
  currentTask: any;
  updateTask: (arg1: any, arg2: any) => void;
};

const EditPointsForm = (props: PropsType) => {
  const [task, setTask] = useState(props.currentTask);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  useEffect(() => {
    setTask(props.currentTask);
  }, [props]);

  return (
    <StyledForm
      onSubmit={(event) => {
        event.preventDefault();
        props.updateTask(task.id, task);
      }}
    >
      <StyledLabel>Zachowanie</StyledLabel>
      <StyledInput
        type="text"
        name="name"
        value={task.name}
        onChange={handleInputChange}
      />
      <StyledLabel>Punkty</StyledLabel>
      <StyledInput
        type="nubmer"
        name="value"
        value={task.value}
        onChange={handleInputChange}
      />
      <StyledRow>
        <AddButton>Edytuj zachowanie</AddButton>
        <DeleteButtonText onClick={() => props.setEditing(false)}>
          Anuluj
        </DeleteButtonText>
      </StyledRow>
    </StyledForm>
  );
};

export default EditPointsForm;
