require ('dotenv').config();

const express = require('express'),
    massive = require('massive'),
    // session = require('express-session'),
    {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
    port = SERVER_PORT,
    app = express();

app.use(express.json());


massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then( db => {
    app.set('db', db);
    console.log('Data Base Connected')
});


app.listen(port, ()=> console.log(`Listening on ${port}`));

