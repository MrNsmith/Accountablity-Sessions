module.exports = {
    
    GetStudents:(req,res)=>{
        const db = req.app.get('db');
        db.get_students()
        .then((players)=> res.status(200).send(players))
        .catch((err)=>console.log(err))
    },
    AddSlip:(req,res)=>{

    }
    
    


}