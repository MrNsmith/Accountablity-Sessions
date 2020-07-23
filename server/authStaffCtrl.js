const bcrypt = require('bcryptjs');

module.exports ={
    NewStaff: async (req,res)=>{
         //What is that I need to create a new Staff
         const {first_name,last_name,email, password} =req.body,
            db = req.app.get('db');
        //Check if Staff exist
         const foundStaff = await db.auth_staff.check_staff({email});
         if(foundStaff[0]){
           return res.status(400).send(`Staff Member Exists`)
         }  
         //Hashing the Password 
         let salt = bcrypt.genSaltSync(10),
            hash = bcrypt.hashSync(password, salt);

         //Create a Staff Member
         const newStaff = await db.auth_staff.add_staff({first_name,last_name,password:hash ,email}); 
         delete newStaff[0].password
         res.status(201).send(req.session.user)
        },
        LoginStaff: async (req,res)=>{
            //this is what i need to log in
            const {first_name, email, password} = req.body,
                db = req.app.get('db');
            //check to see if Staff exists
            const foundStaff = await db.auth_staff.check_staff({email})
            if(!foundStaff[0]){
                return res.status(401).send(`Staff Not Found`)
            }
            //Compare passwords
            const authenticated = bcrypt.compareSync(password, foundStaff[0].password);
            if(!authenticated){
                return res.status(401).send(`Staff name or password incorrect`)
            }
            //Set user on session , send it to client-side
            delete foundStaff[0].password;
            req.session.user = foundStaff[0]
            res.status(202).send(req.session.user)
            console.log(req.session.user)

        },   
        LogOut: (req,res) => {
            req.session.destroy();
            res.sendStatus(200);

        }
         
         
    }

         