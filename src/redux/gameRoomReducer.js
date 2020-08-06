const initialState = {
  room1: [],
  room2: [],
  room3: [],
  room4: [],
};

const GET_ROOM_ONE = "GET_ROOM_ONE";
const GET_ROOM_TWO = "GET_ROOM_TWO";
const GET_ROOM_THREE = "GET_ROOM_THREE";
const GET_ROOM_FOUR = "GET_ROOM_FOUR";

export function getRoomOne(room1Obj) {
  
  if (room1Obj) {
    return {
      type: GET_ROOM_ONE,
      payload: room1Obj,
    };
  } else {
    return {
      type: GET_ROOM_ONE,
      payload: [],
    };
  }
}
export function getRoomTwo(room2Obj) {
  if (room2Obj) {
    return {
      type: GET_ROOM_TWO,
      payload: room2Obj,
    };
  } else {
    return {
      type: GET_ROOM_TWO,
      payload: [],
    };
  }
}
export function getRoomThree(room3Obj) {
  if (room3Obj) {
    return {
      type: GET_ROOM_THREE,
      payload: room3Obj,
    };
  } else {
    return {
      type: GET_ROOM_THREE,
      payload: [],
    };
  }
}
export function getRoomFour(room4Obj) {
  if (room4Obj) {
    return {
      type: GET_ROOM_FOUR,
      payload: room4Obj,
    };
  } else {
    return {
      type: GET_ROOM_FOUR,
      payload: [],
    };
  }
}
export default function gameRoomReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ROOM_ONE:
      return { ...state, room1: payload };

    case GET_ROOM_TWO:
      return { ...state, room2: payload };

    case GET_ROOM_THREE:
      return { ...state, room3: payload };
      
    case GET_ROOM_FOUR:
      return { ...state, room4: payload };

    default:
      return state;
  }
}
