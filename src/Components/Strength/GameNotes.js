import React, { Component } from 'react';
import StudentNav from '../Student/StudentNav';
import axios from 'axios';
import '../Strength/GameNotes.scss';
import {connect} from 'react-redux'

class GameNotes extends Component {
    constructor(props){
        super(props);
        this.state={
            room:'1',
            note: ''
        }
    }
    componentDidMount(){
        if(!this.props.reducer.user.first_name){
            this.props.history.push('/')
        }
    }
    handelChange=(event)=>{
        this.setState({room:event.target.value})
    }
    handelNotes=(event)=>{
        this.setState({note:event.target.value})
    }
    sendEmail=()=>{
        const{room,note}= this.state;
        axios.post(`/api/email`, {room,note})
        this.addNote()
        alert('notes saved and email send')
        this.props.history.push('/')
    }
    addNote=()=>{
        const {room,note} = this.state;
        axios.post(`/api/note`, {room, note})

    }

    render(){
       
        return (
            <div className='main-div'>
               <h1 className='title'>Game Notes</h1> 
                    
                    <label >  Choose a room</label>
                    <select className='opt' onChange={this.handelChange}>
                        <option  value='1'>One</option>
                        <option  value='2'>Two</option>
                        <option  value='3'>Three</option>
                        <option  value='4'>Four</option>
                    </select>
                    
                    <div>
                    <textarea placeholder='TYPE NOTES HERE ...' className='text-area' onChange={this.handelNotes} ></textarea>

                    </div>
                    <button onClick={this.addNote}>Save</button>
                    <button onClick={this.sendEmail} >Send</button>
                <StudentNav/>

            </div>
        )
    }
}
const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps)( GameNotes);
