import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import '../Staff/StaffNav.scss'
const StaffNav = () => {
    const handleLogout=()=>{
        axios.get('/api/staff-logout')
        .then(()=>console.log('logged out'))
        .catch((err)=> console.log(err))
    }
        return (
            <div className='nav-container'>
                
                <nav className='nav'>
                <Link className='nav-links' to = '/staff/add/staff'>Add Staff</Link>
                <Link className='nav-links' to = '/staff/add/student'>Add Student</Link>
                <Link className='nav-links' to = '/staff/edit/staff'>Edit Staff</Link>
                <Link className='nav-links' to = '/staff/edit/student'>Edit Student</Link>
                <Link className='nav-links' to = '/staff/edit/game'>Edit Game</Link>
                <Link className='nav-links' onClick={handleLogout} to = '/'> Logout</Link>
                </nav>

            </div>
        )
    
}
export default StaffNav