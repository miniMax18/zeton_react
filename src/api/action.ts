const getStudentsListAction = (data: any) => ({
  type: "GET_STUDENTS",
  payload: {
    students: data,
  },
});

const chooseStudentAction = (data: any) => ({
  type: "ADD_CHOOSEN_STUDENT",
  payload: {
    student: data,
  },
});

const removeChoosenStudentAction = () => ({
  type: "REMOVE_CHOOSEN_STUDENT",
  payload: {
    student: null,
  },
});

export { getStudentsListAction, chooseStudentAction, removeChoosenStudentAction };
