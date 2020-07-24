import React,{useState} from 'react';
import axios from 'axios'
import StudentNav from '../Student/StudentNav';



const StrengthLogin = (props) => {
    let [first_name, setFirstname] = useState(''),
        [last_name, setLastname] = useState(''),
        [password, setPassword] = useState('');
    
   let handleLogin = ()=> {
        axios.post('/api/student-login', {first_name,last_name,password})
        //need to send to redux
        .then((res) => {
            console.log(res.data)
            props.history.push('/strength/game-notes');
        })
        .catch(err=> {
            console.log(err)
        })
    }
        return (
            <div>
                Strength Login
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

                <StudentNav/>

            </div>
        )
          
    
}
export default StrengthLogin