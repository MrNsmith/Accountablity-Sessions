module.exports = {

//Room 1
  AddGameRoomOne: (req, res) => {
    const { played_by, played_with } = req.body;
    console.log(played_by, played_with);
    const db = req.app.get("db");
    db.game_room_one
      .add_game_room_one(played_by, played_with)
      .then(() => res.sendStatus(200))
      .catch((err) => console.log(err));
  },
  GetAllRoomOne:(req, res) => {
    const db = req.app.get('db');
    db.game_room_one.get_all_gr1()
    .then((players)=> res.status(200).send(players))
    .catch((err)=>console.log(err))

  },
  //Room 2
  AddGameRoomTwo: (req, res) => {
    const { played_by, played_with } = req.body;
    console.log(played_by, played_with);
    const db = req.app.get("db");
    db.game_room_two
      .add_game_room_two(played_by, played_with)
      .then(() => res.sendStatus(200))
      .catch((err) => console.log(err));
  },
  GetAllRoomTwo:(req, res) => {
    const db = req.app.get('db');
    db.game_room_two.get_all_gr2()
    .then((players)=> res.status(200).send(players))
    .catch((err)=>console.log(err))

  },
  //Room 3
  AddGameRoomThree: (req, res) => {
    const { played_by, played_with } = req.body;
    console.log(played_by, played_with);
    const db = req.app.get("db");
    db.game_room_three
      .add_game_room_three(played_by, played_with)
      .then(() => res.sendStatus(200))
      .catch((err) => console.log(err));
  },
  GetAllRoomThree:(req, res) => {
    const db = req.app.get('db');
    db.game_room_three.get_all_gr3()
    .then((players)=> res.status(200).send(players))
    .catch((err)=>console.log(err))

  },
  //Room 4
  AddGameRoomFour: (req, res) => {
    const { played_by, played_with } = req.body;
    console.log(played_by, played_with);
    const db = req.app.get("db");
    db.game_room_four
      .add_game_room_four(played_by, played_with)
      .then(() => res.sendStatus(200))
      .catch((err) => console.log(err));
  },
  GetAllRoomFour:(req, res) => {
    const db = req.app.get('db');
    db.game_room_four.get_all_gr4()
    .then((players)=> res.status(200).send(players))
    .catch((err)=>console.log(err))

  },
};
