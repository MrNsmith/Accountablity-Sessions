import axios from 'axios';

const initialState = {
    room1:{},
    room2:{},
    room3:{},
    room4:{}
}

const GET_ROOM_ONE = "GET_ROOM_ONE";

export function getRoomOne(){
    const newRoom1 = axios.get(`/api/room-one`);

    return {
        type: GET_ROOM_ONE,
        payload: newRoom1

    }
}
export default function gameRoomReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_ROOM_ONE:
            return {...state,room1: payload}
        default:
            return state;
    }
}