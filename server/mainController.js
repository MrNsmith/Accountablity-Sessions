module.exports = {
 // Gets all students 
  GetStudents: (req, res) => {
    const db = req.app.get("db");
    db.get_students()
      .then((players) => res.status(200).send(players))
      .catch((err) => console.log(err));
  },
  // Creates a Game slip
  AddSlip: (req, res) => {
    const { played_by, played_with } = req.body,
      db = req.app.get("db");

    db.slips.add_slip(played_by, played_with)
      .then(() => res.sendStatus(200))
      .catch((err) => console.log(err));
  },
  // Grabs slips and student info
  GetAllSlips: (req, res) =>{
      const db = req.app.get('db');
      db.slips.get_all_slips()
      .then((slip)=> res.status(200).send(slip))
      .catch((err)=>console.log(err))
      
      
  },
  // Delete slip by ID
  DeleteSlip:(req, res)=>{
      const {id} = req.params;
      const db = req.app.get('db');

      db.slips.delete_slip(id)
      .then(()=> res.sendStatus(200))
      .catch((err)=> res.status(500).sent(err))

  },
 

  //Saves game notes to the data base
   AddNote: (req, res) => {
        const{note, room} = req.body,
        db= req.app.get("db");

    db.game_note.add_note({note, room}) 
    .then(() => res.sendStatus(200)) 
    .catch(err => console.log(err)) 

   }
};
