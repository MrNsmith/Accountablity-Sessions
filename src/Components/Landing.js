import React from 'react'
import {Link} from 'react-router-dom';

const Landing = () =>{

    return (
        <div>
            
            <button><Link to='/staff/login'>STAFF</Link></button>
            <button><Link to='/student/login'>STUDENT</Link></button>
            <button><Link to='/strength/login'>STRENGTH</Link></button>
        </div>
    )
}
export default Landing