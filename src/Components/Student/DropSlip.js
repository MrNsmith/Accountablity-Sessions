import React, { Component } from "react";
import StudentNav from "./StudentNav";
import { connect } from "react-redux";
import axios from "axios";
import "../Student/DropSlip.scss";

class DropSlip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      played_by: {},
      played_with: {},
    };
  }
  componentDidMount(){
    if(!this.props.reducer.user.first_name){
      this.props.history.push('/student/login')
    }
    if(!this.props.reducer.students[0]){
      this.props.history.push('/student/login')

    }
  }
  handleSlipChoice = (event) => {
    this.setState({ played_with: event.target.value });
    this.setState({ played_by: this.props.reducer.user.student_id });
  };
  addSlip = () => {
    const { played_by, played_with } = this.state;

    axios
      .post(`/api/slip`, { played_by, played_with })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    alert("Your Slip has been submitted");
    this.props.history.push("/");
  };

  render() {
    const mappedStudents = this.props.reducer.students.map((student, i) => (
      <div className="student-box" key={i}>
        <div>
          <p>
            {student.first_name} {student.last_name}
          </p>
          <img src={student.profile_pic} />
        </div>
        <div>
          <button value={student.student_id} onClick={this.handleSlipChoice}>
            Drop Slip
          </button>
          <button onClick={this.addSlip}>Submit</button>
        </div>
      </div>
    ));

    return (
      <div className="drop-slip">
        <p>
          Hello
          </p>
            <img src={this.props.reducer.user.profile_pic} alt="pic" />
          <p>

          {this.props.reducer.user.first_name}
        </p>

        <p>Who would you like to Play the Game with?</p>
        <div className="student-flex">{mappedStudents}</div>
        <StudentNav />
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps)(DropSlip);
