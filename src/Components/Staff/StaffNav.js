import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import {connect} from 'react-redux'
import {getRoomOne,getRoomTwo,getRoomThree,getRoomFour} from '../../redux/gameRoomReducer'
import '../Staff/StaffNav.scss'

class StaffNav extends Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }
    componentDidMount(){
        this.getRoom1()
        this.getRoom2()
        this.getRoom3()
        this.getRoom4()
    }
     handleLogout=()=>{
        axios.get('/api/staff-logout')
        .then(()=>console.log('logged out'))
        .catch((err)=> console.log(err))

    }
     getRoom1 = ()=>{   
         axios
           .get(`/api/room-one`)
           .then((res) => {
             this.props.getRoomOne(res.data)
           })
           .catch((err) => console.log(err));
       };
        getRoom2 =()=> {
         axios
           .get(`/api/room-two`)
           .then((res) => {
             this.props.getRoomTwo(res.data)
           })
           .catch((err) => console.log(err));
       };
       getRoom3 = () =>{
         axios
           .get(`/api/room-three`)
           .then((res) => {
             this.props.getRoomThree(res.data)
           })
           .catch((err) => console.log(err));
       };
        getRoom4 = () =>{
         axios
           .get(`/api/room-four`)
           .then((res) => {
             this.props.getRoomFour(res.data)
           })
           .catch((err) => console.log(err)); 
       };
        render(){
        return (
            <div className='nav-container'>
                
                <nav className='nav'>
                <Link className='nav-links' to = '/staff/add/staff'>Add Staff</Link>
                <Link className='nav-links' to = '/staff/add/student'>Add Student</Link>
                <Link className='nav-links' to = '/staff/edit/staff'>Edit Staff</Link>
                <Link className='nav-links' to = '/staff/edit/student'>Edit Student</Link>
                <Link className='nav-links' to = '/staff/edit/game'>Edit Game</Link>
                <Link className='nav-links' onClick={this.handleLogout} to = '/'> Logout</Link>
                </nav>

            </div>
        )
        }
}
const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps, {
  getRoomOne,
  getRoomTwo,
  getRoomThree,
  getRoomFour,
})(StaffNav);
