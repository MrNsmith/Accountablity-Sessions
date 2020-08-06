import React, { useState} from 'react';
import StaffNav from './StaffNav'
import axios from 'axios'
 const AddStaff =(props)=>  {
    let [first_name, setFirstname] = useState(''),
        [last_name, setLastname] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

    let handleNewStaff = (e)=> {
        e.preventDefault()
        axios.post('/api/staff' , {first_name,last_name,email,password})
     
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
            setFirstname('')
            setLastname('')
            setPassword('')
            setEmail('')
            alert(`Staff has been added`)   
    }   
        
    return (
        <div >
        <StaffNav/>
        <div className="login-main">
            <h1 className='title'>Add Staff</h1>
                <form className='login-form'>
                   <input
                   value={first_name}
                   placeholder='First Name'
                   name="first_name"
                   onChange={e => setFirstname(e.target.value)}
                   />
                   <input
                   value={last_name}
                   placeholder='Last Name'
                   name='last_name'
                   onChange={e => setLastname(e.target.value)}
                   />
                   <input
                   value={email}
                   type='email'
                   placeholder='E-Mail'
                   name='email'
                   onChange={e => setEmail(e.target.value)}
                   />
                   <input
                   value={password}
                   type='password'
                   placeholder='Password'
                   name='password'
                   onChange={e => setPassword(e.target.value)}
                   />
                   {first_name}
                   <button onClick={handleNewStaff}>ADD</button>
                </form>
                </div>
        </div>
    )

}
export default AddStaff;