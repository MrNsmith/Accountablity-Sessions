import React, { Component } from "react";
import StudentNav from "./StudentNav";
import { connect } from "react-redux";


class DropSlip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:   props.user,
      slipChoice: [],
    };
  }
  handleSlipChoice = (event) => {
    this.setState({ slipChoice: event.target.value });
  };
  render() {
      console.log(this.state.user)
    console.log(this.state.slipChoice);
    const mappedStudents = this.props.students.map((student, i) => (
      <div key={i}>
        <p>
          {student.first_name} {student.last_name}
        </p>
        <button value={student.student_id} 
        onClick={this.handleSlipChoice}>Drop Slip</button>
      </div>
    ));

    return (
      <div>
        Drop Slip
        <p>Hello {this.props.user.first_name}</p>
        <p>Who would You like to Play a Game with ?</p>
        {mappedStudents}
        <StudentNav />
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps)(DropSlip);
