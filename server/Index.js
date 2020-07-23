require ('dotenv').config();

const express = require('express'),
    massive = require('massive'),
    session = require('express-session'),
    studentCtrl = require('./authStudentCtrl'),
    staffCtrl = require('./authStaffCtrl'),
    {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
    port = SERVER_PORT,
    app = express();

app.use(express.json());

app.use(session({
    resave:false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 1}
}));

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
//Staff-Auth EndPoints
app.post(`/api/staff`, staffCtrl.NewStaff)
app.post(`/api/staff-login` , staffCtrl.LoginStaff)
app.get(`/api/staff-logout`, staffCtrl.LogOut)



app.listen(port, ()=> console.log(`Listening on ${port}`));

