import React, { useEffect } from "react";
import "./App.scss";
import routes from "./routes";
import { connect } from "react-redux";
import { getStudents } from "./redux/reducer";
import {
  getRoomOne,
  getRoomTwo,
  getRoomThree,
  getRoomFour,
} from "./redux/gameRoomReducer";
import axios from "axios";

function App(props) {
  useEffect(() => {allStudent()
   
  },[]);
  //this loads the function initially
  useEffect(() => {getRoom1()},[]);
  useEffect(() => {getRoom2()},[]);
  useEffect(() => {getRoom3()},[]);
  useEffect(() => {getRoom4()},[]);

  // this is checking to see if state has changed and if it has run the axios request again
  useEffect(()=>{allStudent()

  },[props.reducer.students]);
  useEffect(() => {getRoom1()}, [props.gameRoomReducer.room1]);
  useEffect(() => {getRoom2()}, [props.gameRoomReducer.room2]);
  useEffect(() => {getRoom3()}, [props.gameRoomReducer.room3]);
  useEffect(() => {getRoom4()}, [props.gameRoomReducer.room4]);
  
  function allStudent (){
    axios
    .get(`/api/students`)
    .then((res) => props.getStudents(res.data))
    .catch((err) => console.log(err));
  }
  const getRoom1 = () =>{
    axios
      .get(`api/room-one`)
      .then((res) => props.getRoomOne(res.data))
      .catch((err) => console.log(err));
  };
  const getRoom2 = () => {
    axios
      .get(`api/room-two`)
      .then((res) => props.getRoomTwo(res.data))
      .catch((err) => console.log(err));
  };
 const getRoom3 = () => {
    axios
      .get(`api/room-three`)
      .then((res) => props.getRoomThree(res.data))
      .catch((err) => console.log(err));
  };
  const getRoom4 = () => {
    axios
      .get(`api/room-four`)
      .then((res) => props.getRoomFour(res.data))
      .catch((err) => console.log(err));
  };

 
  return <div className="App">{routes}</div>;
}
const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps, {
  getStudents,
  getRoomOne,
  getRoomTwo,
  getRoomThree,
  getRoomFour,
})(App);
