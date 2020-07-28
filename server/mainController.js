module.exports = {
    
  GetStudents: (req, res) => {
    const db = req.app.get("db");
    db.get_students()
      .then((players) => res.status(200).send(players))
      .catch((err) => console.log(err));
  },
  AddSlip: (req, res) => {
    const { played_by, played_with } = req.body,
      db = req.app.get("db");

    db.add_slip(played_by, played_with)
      .then(() => res.sendStatus(200))
      .catch((err) => console.log(err));
  },
};
