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
  const [studentsSnapShot, setStudentsSnapShot] = React.useState(null);
  const [roomOneSnapShot, setRoomOneSnapShot] = React.useState(null);
  const [roomTwoSnapShot, setRoomTwoSnapShot] = React.useState(null);
  const [roomThreeSnapShot, setRoomThreeSnapShot] = React.useState(null);
  const [roomFourSnapShot, setRoomFourSnapShot] = React.useState(null);

  //this loads the function initially
  useEffect(() => { allStudent()},[])
  useEffect(() => {getRoom1() },[])
  useEffect(() => { getRoom2()},[])
  useEffect(() => {  getRoom3()},[])
  useEffect(() => {getRoom4()},[])
  
    
   
    
 

  // this is checking to see if state has changed and if it has run the axios request again
  useEffect(() => {allStudent()}, [props.reducer.students]);
  useEffect(() => {getRoom1()}, [props.gameRoomReducer.room1]);
  useEffect(() => {getRoom2()}, [props.gameRoomReducer.room2]);
  useEffect(() => {getRoom3()}, [props.gameRoomReducer.room3]);
  useEffect(() => {getRoom4()}, [props.gameRoomReducer.room4]);
  
  function allStudent (){
    if(JSON.stringify(studentsSnapShot) !== JSON.stringify(props.reducer.students)) {// a checks to see if the state has changed from previous props.
      axios
      .get(`/api/students`)
      .then((res) => {
        setStudentsSnapShot(res.data)
        props.getStudents(res.data)
      })
      .catch((err) => console.log(err));
    }
  }
  function getRoom1 (){
   if(JSON.stringify(roomOneSnapShot) !== JSON.stringify(props.gameRoomReducer.room1)) {
    axios
      .get(`/api/room-one`)
      .then((res) => {
        setRoomOneSnapShot(res.data)
        props.getRoomOne(res.data)
      })
      .catch((err) => console.log(err));
    }
  };
  function getRoom2 () {
    if(JSON.stringify(roomTwoSnapShot) !== JSON.stringify(props.gameRoomReducer.room2)) {
    axios
      .get(`/api/room-two`)
      .then((res) => {
        setRoomTwoSnapShot(res.data)
        props.getRoomTwo(res.data)
      })
      .catch((err) => console.log(err));
    }
  };
 function getRoom3 () {
  if(JSON.stringify(roomThreeSnapShot) !== JSON.stringify(props.gameRoomReducer.room3)) {
    axios
      .get(`/api/room-three`)
      .then((res) => {
        setRoomThreeSnapShot(res.data)
        props.getRoomThree(res.data)
      })
      .catch((err) => console.log(err));
    }
  };
  function getRoom4  () {
    if(JSON.stringify(roomFourSnapShot) !== JSON.stringify(props.gameRoomReducer.room4)) {
    axios
      .get(`/api/room-four`)
      .then((res) => {
        setRoomFourSnapShot(res.data)
        props.getRoomFour(res.data)
      })
      .catch((err) => console.log(err));
    }
  };

 
  return <div className="App">{routes}</div>;
}
const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps, {
  getRoomOne,
  getStudents,
  getRoomTwo,
  getRoomThree,
  getRoomFour,
})(App);
