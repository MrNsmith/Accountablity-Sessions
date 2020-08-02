const initialState = {
  user: {},
  students: [],
};
const GET_USER = "GET_USER";
const GET_STUDENTS = "GET_STUDENTS";

export function getStudents(studentsObj) {
  if (studentsObj) {
    return {
      type: GET_STUDENTS,
      payload: studentsObj,
    };
  } else {
    return {
      type: GET_STUDENTS,
      payload: [],
    };
  }
}

export function getUser(userObj) {
  return {
    type: GET_USER,
    payload: userObj,
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return { ...state, user: payload };
    case GET_STUDENTS:
      return { ...state, students: payload };
    default:
      return state;
  }
}
