import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
const StudentNav = () => {
    const handleLogout=()=>{
        axios.get('/api/student-logout')
        .then(()=>console.log('logged out'))
        .catch((err)=> console.log(err))
    }
        return (
            <div>
                
                <button onClick={handleLogout}><Link to = '/'>Logout</Link></button>
            </div>
        )
    
}
export default StudentNav