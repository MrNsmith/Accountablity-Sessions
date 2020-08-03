import React from 'react';
import {Link} from 'react-router-dom';
import '../Components/Landing.scss';

const Landing = (props) =>{
   
    return (
        <div className='landing' >
            <div className='landing'>
            <button className='landing-btn'><Link to='/staff/login'>STAFF</Link></button>
            <button className='landing-btn'><Link to='/student/login'>STUDENT</Link></button>
            <button className='landing-btn'><Link to='/strength/login'>STRENGTH</Link></button>
            </div>
        </div>
    )
}
export default Landing