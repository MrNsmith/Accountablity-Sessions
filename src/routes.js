import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing';
import StaffLogin from './Components/Staff/StaffLogin';
import EditGame from './Components/Staff/EditGame';
import EditStudent from './Components/Staff/EditStudent';
import EditStaff from './Components/Staff/EditStaff';
import StrengthLogin from './Components/Strength/StrengthLogin';
import GameNotes from './Components/Strength/GameNotes';
import StudentLogin from './Components/Student/StudentLogin';
import DropSlip from './Components/Student/DropSlip';
import AddStaff from './Components/Staff/AddStaff';
import AddStudent from './Components/Staff/AddStudent';

export default (
    <Switch>
        <Route exact path = '/' component={Landing}/>
        <Route path = '/staff/login' component={StaffLogin}/>
        <Route path = '/staff/edit/game' component={EditGame}/>
        <Route path = '/staff/edit/student' component={EditStudent}/>
        <Route path = '/staff/add/student' component={AddStudent}/>

        <Route path = '/staff/edit/staff' component={EditStaff}/>
        <Route path = '/staff/add/staff' component={AddStaff}/>
        <Route path = '/strength/login' component={StrengthLogin}/>
        <Route path = '/strength/game-notes' component={GameNotes}/>
        <Route path = '/student/login' component={StudentLogin}/>
        <Route path = '/student/drop-slip' component={DropSlip}/>
    </Switch>
       
)