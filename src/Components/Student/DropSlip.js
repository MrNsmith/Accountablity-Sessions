import React, { Component } from "react";
import StudentNav from "./StudentNav";
import { connect } from "react-redux";
import axios from "axios";


class DropSlip extends Component {
  constructor(props) {
    super(props)
    this.state = {
      played_by:   {},
      played_with: {}
    }
  }
  handleSlipChoice = (event) => {
    this.setState({ played_with: event.target.value })
    this.setState({played_by: this.props.user.student_id})
    
  }
  addSlip = () =>{
      const {played_by,played_with} = this.state;
    axios
    .post(`/api/slip`, {played_by, played_with})
    .then((res)=>console.log(res))
    .catch(err=> console.log(err))
    alert('Your Slip has been submitted')
    this.props.history.push('/')
  }
  
 
  render() {
      console.log(this.state.played_by)
    console.log(this.state.played_with);
    const mappedStudents = this.props.students.map((student, i) => (
      <div key={i}>
        <p>
          {student.first_name} {student.last_name}
        </p>
        <button value={student.student_id} 
        onClick={this.handleSlipChoice}>Drop Slip</button>
        <button onClick={this.addSlip}>submit</button>
      </div>
    ));

    return (
      <div>
        Drop Slip
        <p>Hello {this.props.user.first_name}</p>
        <p>Who would you like to Play the Game with?</p>
        {mappedStudents}
        <StudentNav />
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps)(DropSlip);
