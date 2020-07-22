require ('dotenv').config();

const express = require('express'),
    massive = require('massive'),
    session = require('express-session'),
    authCtrl = require('./authStudentCtrl'),
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
//Auth EndPoints
app.post(`/api/register`, authCtrl.AddNewStudent)
app.post(`/api/login` , authCtrl.LoginStudent)
app.get(`/api/logout`, authCtrl.LogOut)

app.listen(port, ()=> console.log(`Listening on ${port}`));

