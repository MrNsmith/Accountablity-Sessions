import React, { Component } from "react";
import StaffNav from "./StaffNav";
import axios from "axios";
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
  }
  componentDidUpdate(){
      this.getAllSlips()
  }

  deleteSlips=(id)=>{
      axios
      .delete(`/api/slip/${id}`)
      .then(()=>console.log(`slip number ${id} has been deleted`))
      .catch((err)=> console.log(err))
  }
  getAllSlips = () => {
    axios
      .get(`/api/slip`)
      .then((res) => this.setState({ slips: res.data }))
      .catch((err) => console.log(err));
  };
  getGameRoomOne=()=>{
    axios
        .get(`/api/room-one`)
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
  render() {
    // console.log(this.state.room1);

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
        Edit Game
        {mappedSlips}
       

        
        <StaffNav />
      </div>
    );
  }
}
export default EditGame;
