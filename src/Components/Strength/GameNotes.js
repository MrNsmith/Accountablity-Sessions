import React, { Component } from 'react';
import StudentNav from '../Student/StudentNav';
import axios from 'axios';

class GameNotes extends Component {
    constructor(props){
        super(props);
        this.state={
            room:'1',
            note: ''
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
        console.log(this.state.room)
        console.log(this.state.note)
        return (
            <div>
               <h1>Game Notes</h1> 
                    <label >  Choose a room :</label>
                    <select onChange={this.handelChange}>
                        <option value='1'>One</option>
                        <option value='2'>Two</option>
                        <option value='3'>Three</option>
                        <option value='4'>Four</option>
                    </select>
                    <div>
                    <textarea onChange={this.handelNotes} rows='15' cols="50"></textarea>

                    </div>
                    <button onClick={this.addNote}>Save</button>
                    <button onClick={this.sendEmail} >Send</button>
                <StudentNav/>

            </div>
        )
    }
}
export default GameNotes