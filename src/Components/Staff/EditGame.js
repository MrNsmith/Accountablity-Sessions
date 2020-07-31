import React, { Component } from "react";
import StaffNav from "./StaffNav";
import axios from "axios";
import {connect} from 'react-redux';
import {getRoomOne} from '../../redux/gameRoomReducer'
class EditGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slips: [],
      

      room1: '',
      room2: '',
      room3: '',
      room4: '',
    };
  }
  componentDidMount() {
    this.getAllSlips();
    ;
  }

getRoom1=()=>{
    axios
    .get(`api/room-one`)
    .then((res)=> this.props.getRoomOne(res.data))
    .catch(err=> console.log(err))
}
getRoom2=()=>{
    axios
    .get(`api/room-two`)
    .then((res)=> this.props.getRoomTwo(res.data))
    .catch(err=> console.log(err))
}
getRoom3=()=>{
    axios
    .get(`api/room-three`)
    .then((res)=> this.props.getRoomThree(res.data))
    .catch(err=> console.log(err))
}
getRoom4=()=>{
    axios
    .get(`api/room-four`)
    .then((res)=> this.props.getRoomFour(res.data))
    .catch(err=> console.log(err))  
  
}
  getAllSlips = () => {
    axios
      .get(`/api/slip`)
      .then((res) => this.setState({ slips: res.data }))
      .catch((err) => console.log(err));
  };

  deleteSlips=(id)=>{
      axios
      .delete(`/api/slip/${id}`)
      .then(()=>console.log(`slip number ${id} has been deleted`))
      .catch((err)=> console.log(err))
  }

  handleRoom1Add = (played_by, played_with) => {
    this.setState({ room1: { played_by, played_with } });
    this.addRoomOne()
  };
  addRoomOne = () => {
    const { room1 } = this.state;

    axios
      .post(`api/room-one`, room1)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  deletePlayerRm1=(id)=>{
    axios
    .delete(`/api/room-one/${id}`)
    .then(()=>console.log(`player been deleted`))
    .catch((err)=> console.log(err))
}
  handleRoom2Add = (played_by, played_with) => {
    this.setState({ room2: { played_by, played_with } });
   this.addRoomTwo()
  };
  addRoomTwo = () => {
    const { room2 } = this.state;
    axios
      .post(`api/room-two`, room2)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  deletePlayerRm2=(id)=>{
    axios
    .delete(`/api/room-two/${id}`)
    .then(()=>console.log(`players have been deleted`))
    .catch((err)=> console.log(err))
}
  handleRoom3Add = (played_by, played_with) => {
    this.setState({ room3: { played_by, played_with } });
    this.addRoomThree()
  };
  addRoomThree = () => {
    const { room3 } = this.state;
    axios
      .post(`api/room-three`, room3)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  deletePlayerRm3=(id)=>{
    axios
    .delete(`/api/room-three/${id}`)
    .then(()=>console.log(`players have been deleted`))
    .catch((err)=> console.log(err))
}
  handleRoom4Add = (played_by, played_with) => {
    this.setState({ room4: { played_by, played_with } });
    this.addRoomFour()
  };
  addRoomFour = () => {
    const { room4 } = this.state;
    axios
      .post(`api/room-four`, room4)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  deletePlayerRm4=(id)=>{
    axios
    .delete(`/api/room-four/${id}`)
    .then(()=>console.log(`players have been deleted`))
    .catch((err)=> console.log(err))
}
  render() {
  
   const mappedRoomOne = this.props.gameRoomReducer.room1.map((student, i)=>(
       <div key={i}>
           <p>{student.first_name}</p>
           <p>{student.student_first}</p>
           <p>{student.slip_id}</p>
           <button onClick={()=>this.deletePlayerRm1(student.slip_id)}>Remove Slip</button>
       </div>
   ))
   const mappedRoomTwo = this.props.gameRoomReducer.room2.map((student, i)=>(
       <div key={i}>
           <p>{student.first_name}</p>
           <p>{student.student_first}</p>
           <p>{student.slip_id}</p>
           <button onClick={()=>this.deletePlayerRm2(student.slip_id)}>Remove Slip</button>
       </div>
   ))
   const mappedRoomThree = this.props.gameRoomReducer.room3.map((student, i)=>(
       <div key={i}>
           <p>{student.first_name}</p>
           <p>{student.student_first}</p>
           <p>{student.slip_id}</p>
           <button onClick={()=>this.deletePlayerRm3(student.slip_id)}>Remove Slip</button>
       </div>
   ))
   const mappedRoomFour = this.props.gameRoomReducer.room4.map((student, i)=>(
       <div key={i}>
           <p>{student.first_name}</p>
           <p>{student.student_first}</p>
           <p>{student.slip_id}</p>
           <button onClick={()=>this.deletePlayerRm4(student.slip_id)}>Remove Slip</button>
       </div>
   ))
  
    const mappedSlips = this.state.slips.map((slip, i) => (
      <div key={i}>
        <p>{slip.first_name} wants to play the game with</p>
        <p>{slip.played_with_first}</p>
        <button
          onClick={()=>this.handleRoom1Add(slip.played_by, slip.played_with)}
        >
          ROOM1
        </button>
        <button
          onClick={()=>this.handleRoom2Add(slip.played_by, slip.played_with)}
        >
          ROOM2
        </button>
        <button
          onClick={()=>this.handleRoom3Add(slip.played_by, slip.played_with)}
        >
          ROOM3
        </button>
        <button
          onClick={()=> this.handleRoom4Add(slip.played_by, slip.played_with)}
        >
          ROOM4
        </button>
        <div>
            <button onClick={()=>this.deleteSlips(slip.slip_id)}>Delete Slip</button>
        </div>
      </div>
    ));
    return (
      <div>
        <h4>Game Room One</h4>
       {mappedRoomOne}
       <h4>Game Room Two</h4>
       {mappedRoomTwo}
       <h4>Game Room Three</h4>
       {mappedRoomThree}
       <h4>Game Room Four</h4>
       {mappedRoomFour}
        <h4>Game Slips</h4>
        {mappedSlips}
       

        
        <StaffNav />
      </div>
    );
  }
}
const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps,{getRoomOne})(EditGame);
