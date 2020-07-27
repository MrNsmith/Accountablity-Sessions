const bcrypt = require('bcryptjs');

module.exports = {
        NewStudent: async (req, res)=>{
            //this is what it needs to add a new student
            const {first_name,last_name, password } = req.body,
                db = req.app.get('db');
            //check to see if Student exists
            const foundStudent = await db.auth_student.check_student({first_name,last_name});  
            if(foundStudent[0]){
                return res.status(400).send(`Student already exists`)
            }
            // Hashing the Password
            let salt = bcrypt.genSaltSync(10),
                hash= bcrypt.hashSync(password, salt);  
            
            //Creating new Student
            const newStudent = await db.auth_student.add_student({first_name, last_name, password:hash})
            delete newStudent[0].password
            req.session.user
            res.status(201).send(req.session.user)

        },
        LoginStudent: async (req,res)=>{
            //this is what i need to log in
            const {first_name, last_name, password} = req.body,
                db = req.app.get('db');
            //check to see if Student exists
            const foundStudent = await db.auth_student.check_student({first_name,last_name})
            if(!foundStudent[0]){
                return res.status(401).send(`Student Not Found`)
            }
            //Compare passwords
            const authenticated = bcrypt.compareSync(password, foundStudent[0].password);
            if(!authenticated){
                return res.status(401).send(`Student name or password incorrect`)
            }
            //Set user on session , send it to client-side
            delete foundStudent[0].password;
            req.session.user = foundStudent[0]
            res.status(202).send(req.session.user)
            console.log(req.session.user)

        },
        LogOut: (req,res) => {
            req.session.destroy();
            res.sendStatus(200);

        },
        //Keeps Students Logged in
        StudentLoggedIn: async( req, res)=> {
            const db = req.app.get('db');
            if (req.session.user){
                console.log (req.session.user.student_id, "Logged in ctrl");
                const me = await db.auth_student.get_student_id(req.session.user.student_id);
                res.status(200).send(me[0]);
            }
        }
        
      
}