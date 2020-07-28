import React, { Component } from 'react';
import StaffNav from './StaffNav'
import axios from 'axios';
class EditGame extends Component {
    constructor(props){
        super(props);
        this.state={
            slips:{}
        }
    }
    componentDidMount(){
        this.getAllSlips()
    }
  
    getAllSlips=()=>{
        axios.get(`/api/slip`)
        .then((res)=>this.setState({slips:res.data}))
        .catch((err)=>console.log(err))
    }
    render(){
    console.log(this.state.slips)
    const mappedSlip = this.state.slips.map((slip, i) => (
            <div key={i}>
                <p>{slip.played_by}</p>
                
            </div>
    ));
        return (
            <div>
                Edit Game
                
                <StaffNav/>
            </div>
        )
    }
}
export default EditGame;