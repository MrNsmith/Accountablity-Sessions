import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
const StaffNav = () => {
    const handleLogout=()=>{
        axios.get('/api/staff-logout')
        .then(()=>console.log('logged out'))
        .catch((err)=> console.log(err))
    }
        return (
            <div>
                
                <nav><Link to = '/staff/add/staff'>Add Staff</Link></nav>
                <nav><Link to = '/staff/add/student'>Add Student</Link></nav>
                <nav><Link to = '/staff/edit/staff'>Edit Staff</Link></nav>
                <nav><Link to = '/staff/edit/student'>Edit Student</Link></nav>
                <nav><Link to = '/staff/edit/game'>Edit Game</Link></nav>

                <button onClick={handleLogout}><Link to = '/'>Logout</Link></button>
            </div>
        )
    
}
export default StaffNav