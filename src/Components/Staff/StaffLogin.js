import React,{useState} from 'react';
import axios from 'axios'
import {connect} from 'react-redux'

const StaffLogin = (props) => {
    let [first_name, setFirstname] = useState(''),
        [last_name, setLastname] = useState(''),
        [password, setPassword] = useState('');
    
   let handleLogin = ()=> {
        axios.post('/api/staff-login', {first_name,last_name,password})
        //need to send to redux
        .then((res) => {
            props.getUser(res.data)
            props.history.push('/staff/edit/game');
        })
        .catch(err=> {
            console.log(err)
        })
    }
        return (
            <div>
                Staff Login
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
                </form>

                {first_name}
                {last_name}
                {password}

            </div>
        )
          
    
}
export default connect(null,{getUser})(StaffLogin)