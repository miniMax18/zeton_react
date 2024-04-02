/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Heading, Subheading } from '../../atoms/Heading/Heading';
import { StyledArticle } from '../../atoms/Sections/Article';
import MainBox from '../../atoms/Sections/MainBox';

import LiElement, { StyledUl } from '../../atoms/Lists/Lists';
import AddPointsForm from './AddPointsForm';
import EditPointsForm from './EditPointsForm';
import React from 'react';

const PointsList = ({tasksList, studentId}: any) => {
  const [tasks, setTasks] = useState(tasksList);
  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, name: '', value: '' };
  const [currentTask, setCurrentTask] = useState(initialFormState);

  const [currentStudent, setCurrentStudent] = useState(studentId)

  useEffect(() => {
    const filteredTasks = tasks.filter((task: any) => task.student === currentStudent)
    setTasks(filteredTasks)
  }, [])

  const addTask = (task: any) => {
    task.id = tasks.length + 1;
    setTasks([...tasks, task]);
  };

  const deleteTask = (id: any) => {
    setEditing(false);
    setTasks(tasks.filter((task: any) => task.id !== id));
  };

  const updateTask = (id: any, updatedTask: any) => {
    setEditing(false);
    setTasks(tasks.map((task: any) => (task.id === id ? updatedTask : task)));
  };

  const editTask = (task: any) => {
    setEditing(true);
    setCurrentTask({
      id: task.id,
      name: task.text,
      value: task.points,
    });
  };

  return (
    <MainBox>
      <StyledArticle>
        <Heading>Lista zachowań</Heading>
        <StyledUl>
          {tasks.map((task: any) => {
            const { name, value, id } = task;
            return (
              <LiElement
                text={name}
                points={value}
                key={id}
                id={id}
                delete={deleteTask}
                edit={editTask}
              />
            );
          })}
        </StyledUl>
      </StyledArticle>
      {editing ? (
        <StyledArticle>
          <Subheading>Edytuj zachowanie</Subheading>
          <EditPointsForm
            setEditing={setEditing}
            currentTask={currentTask}
            updateTask={updateTask}
          />
        </StyledArticle>
      ) : (
        <StyledArticle>
          <Subheading>Dodaj nowe zachowanie</Subheading>
          <AddPointsForm addTask={addTask} />
        </StyledArticle>
      )}
    </MainBox>
  );
};

export default PointsList;
