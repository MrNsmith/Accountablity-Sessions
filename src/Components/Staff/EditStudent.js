import React, { useState} from 'react';
import StaffNav from './StaffNav'
import axios from 'axios'
import {connect} from 'react-redux'
import {v4 as randomString} from 'uuid';
import {useDropzone} from 'react-dropzone';
import '../Staff/EditStudent.scss';


 const EditStudent =(props)=>  {
    const upload = {isUploading:false}
    const [isUploading, setUploading] = useState(upload);
    const [url, setUrl] = useState('http://via.placeholder.com/450x450');
    const [profile_pic, setProfile_pic] = useState('');
    const [files, setFiles] = useState([])

       
const getSignedRequest =([files])=>{
    setUploading(!isUploading);
   
    const fileName = `${randomString()}-${files.name.replace(/\s/g,'-')}`;
    axios.get(`/sign-s3`, {
        params: {
            'file-name':fileName,
            'file-type': files.type,
        
        },
    })
    .then(response => {
        const { signedRequest, url} = response.data;
        uploadFile(files,signedRequest, url);
    })
    .catch(err => {
        console.log(err);
    });
};
const uploadFile = (files, signedRequest, url) => {
    const options = {
        headers: {
            'Content-Type': files.type,
        },
    };
    axios.put(signedRequest, files, options)
    .then(response => {
        setUploading({isUploading:false, url});
        setUrl(url)
        setProfile_pic(url)
    })
    .catch(err => {
        setUploading({isUploading:false})
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
     
        .then((res)=> console.log(res))
        .catch((err)=>console.log(err))
        setProfile_pic('')
        props.history.push('/staff/edit/student')
    } 
    function MyDropzone(){
        const {getRootProps, getInputProps, isDragActive} = useDropzone({
            accept: "image/*", 
            onDrop: (acceptedFiles) =>{
                setFiles(
                    acceptedFiles.map((file)=> Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    }))
                    )
                }
            })
            const images = files.map((file)=>
            <div key={file.name}>
            <div>
                <img src={file.preview} style={{width:"150px"}} alt='preview'/>
            </div>
        </div>
        )
        console.log(files)
        return (
            <div id='photos' className='photos'>
                <h1>Upload</h1>
                {images}
                <div {...getRootProps()}>
                    <input {...getInputProps()}/>
                    {
                        isDragActive ? 
                        <p>Drop the files here ...</p>:
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    }
                </div>
            </div>
        )
    }  
    
    const mappedStudents = props.reducer.students.map((student, i) => (
        <div  className ='student-photo-box' key={i}>
         <form>
             <p>{student.first_name} {student.last_name}</p>
             <img src={student.profile_pic}/>
                    <button onClick={()=>AddStudentPic(student.student_id)}> Add Profile Pic</button>
                  
              
                 </form>
    
         
        </div>
      ));
      return (
          <div>
          <StaffNav/>
          <div className='main-div'>
              <div >
            <h1>Edit Student</h1>
           <div className='student-photo-flex'>
           {mappedStudents}
            </div> 
            {MyDropzone()}
            <button id='submit-photo' onClick={()=> getSignedRequest(files)}>Submit Photo</button>

              </div>
              </div>
             
            
                    
                

        </div>
    )

}
const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps)(EditStudent);
