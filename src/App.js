import React, {useEffect} from 'react';
import './App.css';
import routes from './routes'
import {connect} from 'react-redux';
import {getStudents} from './redux/reducer'
import axios from 'axios'


function App(props) {
  useEffect(()=>{
    axios
    .get(`api/students`)
    .then((res)=> props.getStudents(res.data))
    .catch((err)=> console.log(err))
})
  
  return (
    <div className="App">
      {routes}
      
    </div>
  );
}

export default connect(null,{getStudents})(App);
