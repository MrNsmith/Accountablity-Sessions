import React from 'react';
import './App.css';
import './Components/Landing';
import Landing from './Components/Landing';
import StaffLogin from './Components/Staff /StaffLogin';
import StaffNav from './Components/Staff /StaffNav';
import EditGame from './Components/Staff /EditGame';
import EditStudent from './Components/Staff /EditStudent';
import StrengthLogin from './Components/Strength/StrengthLogin';
import GameNotes from './Components/Strength/GameNotes';
import StudentLogin from './Components/Student/StudentLogin'
import DropSlip from './Components/Student/DropSlip'
function App() {
  return (
    <div className="App">
      <Landing/>
      <StaffLogin/>
      <StaffNav/>
      <EditGame/>
      <EditStudent/>
      <StrengthLogin/>
      <GameNotes/>
      <StudentLogin/>
      <DropSlip/>
      
    </div>
  );
}

export default App;
