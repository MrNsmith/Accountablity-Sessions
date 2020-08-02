import React,{useState} from 'react';
import axios from 'axios'
import StudentNav from './StudentNav';
import {connect} from 'react-redux'
import {getUser} from '../../redux/reducer'



const StudentLogin = (props) => {
    let [first_name, setFirstname] = useState(''),
        [last_name, setLastname] = useState(''),
        [password, setPassword] = useState('');
    
   let handleLogin = ()=> {
        axios.post('/api/student-login', {first_name,last_name,password})
        //need to send to redux
        .then((res) => {
            props.getUser(res.data)
            props.history.push('/student/drop-slip');
        })
        .catch(err=> {
            console.log(err)
        })
    }
        return (
            <div>
                Student Login
                <form>
                   <input
                   value={first_name}
                   placeholder='First Name'
                   name="firstName"
                   onChange={e => setFirstname(e.target.value)}
                   />
                   <input
                   value={last_name}
                   placeholder='Last Name'
                   name='lastName'
                   onChange={e => setLastname(e.target.value)}
                   />
                   <input
                   value={password}
                   type='password'
                   placeholder='Password'
                   name='password'
                   onChange={e => setPassword(e.target.value)}
                   />
                   <button onClick={handleLogin}>Login</button>
                   <button onClick={()=>props.history.push('/')}>Go back</button>
                </form>
                
                

            </div>
        )
          
    
}
export default connect(null,{getUser})(StudentLogin)