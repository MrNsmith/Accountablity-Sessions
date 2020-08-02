import React, { useState} from 'react';
import StaffNav from './StaffNav'
import axios from 'axios'
import {connect} from 'react-redux'
import {v4 as randomString} from 'uuid';
// import {useDropzone }from 'react-dropzone';
import Dropzone,{useDropzone} from 'react-dropzone';
import {GridLoader} from 'react-spinners';

 const EditStudent =(props)=>  {
    const upload = {isUploading:false}
    let [isUploading, setUploading] = useState(upload);
    let[url, setUrl] = useState('http://via.placeholder.com/450x450');
    let [profile_pic, setProfile_pic] = useState('');
    
       
const getSignedRequest =([file])=>{
    setUploading(true);
    const fileName = `${randomString()}-${file.name.replace(/\s/g,'-')}`;
    axios.get(`/api/sign3`, {
        params: {
            'file-name':fileName,
            'file-type': file.type,
        
        },
    })
    .then(response => {
        const { signedRequest, url} = response.data;
        uploadFile(file,signedRequest, url);
    })
    .catch(err => {
        console.log(err);
    });
};
const uploadFile = (file, signedRequest, url) => {
    const options = {
        headers: {
            'Content-Type': file.type,
        },
    };
    axios.put(signedRequest, file, options)
    .then(response => {
        setUploading(false)
        setUrl(url)
        setProfile_pic(url)
    })
    .catch(err => {
        setUploading(false)
        if (err.response.status === 403){
            alert(`Your request for a signed URL failed with a status 403. Double Check the CORS configuration and bucked policy in the README. ${err.stack}`
            );
        }else{
            alert(`ERROR: ${err.status}\n ${err.stack}`);
        }
    });

}
    let AddStudentPic = (id)=> {
        axios.put(`/api/student/${id}`, {profile_pic})
     
        .then((res)=> res.sendStatus(200))
        .catch((err)=>console.log(err))
        setProfile_pic('')
    }   
  
    const mappedStudents = props.reducer.students.map((student, i) => (
        <div key={i}>
         <form>
             <p>{student.first_name}</p>
                    <button onClick={()=>AddStudentPic(student.student_id)}> Add Profile Pic</button>
                  
              
                 </form>
    
         
        </div>
      ));
    return (
        <div>
            <h1>Edit Student</h1>
            {mappedStudents}
           
             <h1>Upload</h1> 
              <h1>{url}</h1> 
              <img src={url} alt="student picture" width="450px"/>
              <Dropzone></Dropzone>
            
                    
                <StaffNav/>
                

        </div>
    )

}
const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps)(EditStudent);
