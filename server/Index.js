

require ('dotenv').config();

const express = require('express'),
massive = require('massive'),
session = require('express-session'),
studentCtrl = require('./authStudentCtrl'),
staffCtrl = require('./authStaffCtrl'),
mainCtrl = require('./mainController'),
emailCtrl = require('./emailCtrl'),
gameRoomCtrl = require('./gameRoomCtrl'),
aws = require('aws-sdk'),
    {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET,S3_BUCKET,AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} = process.env,
    port = SERVER_PORT,
    app = express();

app.use(express.json());


app.use(session({
    resave:false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 1}
}));
app.get('/api/signs3', (req, res)=> {
    aws.config ={
        region: 'us-west-1',
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
    };
    const s3 = new aws.s3();
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3Params = {
        Bucket: S3_BUCKET,
        Key: fileName,
        Expires: 60,
        ContentType: fileType,
        ACL: 'public-read',
    };
    s3.getSignedUrl('putObject', s3Params, (err, data)=> {
        if (err){
            console.log(err);
            return res.end();
        }
        const returnData = {
            signedRequest: data,
            url:`https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
        };
        return res.send(returnData);
    });
});

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then( db => {
    app.set('db', db);
    console.log('Data Base Connected')
});
//Student-Auth EndPoints
app.post(`/api/student`, studentCtrl.NewStudent)
app.post(`/api/student-login` , studentCtrl.LoginStudent)
app.get(`/api/student-logout`, studentCtrl.LogOut)
app.get(`/api/student-session`, studentCtrl.StudentLoggedIn)
//Staff-Auth EndPoints
app.post(`/api/staff`, staffCtrl.NewStaff)
app.post(`/api/staff-login` , staffCtrl.LoginStaff)
app.get(`/api/staff-logout`, staffCtrl.LogOut)
app.get(`/api/staff-session`, staffCtrl.StaffLoggedIn)
//Email EndPoint
app.post(`/api/email`, emailCtrl.Email)

//Main EndPoints

//gets all students
app.get(`/api/students`, mainCtrl.GetStudents)
app.put(`/api/student/:id`, mainCtrl.UpdateStudentPic)
// game room 1
app.post(`/api/room-one`, gameRoomCtrl.AddGameRoomOne)
app.get(`/api/room-one`, gameRoomCtrl.GetAllRoomOne)
app.delete(`/api/room-one/:id`, gameRoomCtrl.deleteSlipRoomOne)
// game room 2
app.post(`/api/room-two`, gameRoomCtrl.AddGameRoomTwo)
app.get(`/api/room-two`, gameRoomCtrl.GetAllRoomTwo)
app.delete(`/api/room-two/:id`, gameRoomCtrl.deleteSlipRoomTwo)
// game room 3
app.post(`/api/room-three`, gameRoomCtrl.AddGameRoomThree)
app.get(`/api/room-three`, gameRoomCtrl.GetAllRoomThree)
app.delete(`/api/room-three/:id`, gameRoomCtrl.deleteSlipRoomThree)
// game room 4
app.post(`/api/room-four`, gameRoomCtrl.AddGameRoomFour)
app.get(`/api/room-four`, gameRoomCtrl.GetAllRoomFour)
app.delete(`/api/room-four/:id`, gameRoomCtrl.deleteSlipRoomFour)

//creates a slip
app.post(`/api/slip`, mainCtrl.AddSlip)
//gets all slips
app.get('/api/slip', mainCtrl.GetAllSlips)
//delete slip
app.delete( `/api/slip/:id`, mainCtrl.DeleteSlip)
//creates a game note
app.post(`/api/note`, mainCtrl.AddNote)

app.listen(port, ()=> console.log(`Listening on ${port}`));

