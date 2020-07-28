CREATE  TABLE student(
	student_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50),
	last_name VARCHAR(75),
	password VARCHAR(150),
	profie_pic TEXT
); 
CREATE TABLE staff(
    staff_id SERIAL PRIMARY KEY,
    first_name  VARCHAR(50),
    last_name VARCHAR(75),
    email VARCHAR(150),
    password VARCHAR(150),
    student_id INTEGER REFERENCES  student(student_id),
    profile_pic TEXT
);
 CREATE TABLE game(
    game_Id  SERIAL PRIMARY KEY,
    game_room  INT,
    notes TEXT,
    game_date DATE NOT NULL DEFAULT CURRENT_DATE,
    student_id  INTEGER REFERENCES  student(student_id)
);
CREATE TABLE game_list(
game_list_id serial primary key,
student_id  INTEGER REFERENCES  student(student_id),
game_id integer references game(game_id)
);
CREATE TABLE game_slip(
slip_id serial primary key,
played_by  integer references student(student_id),
played_with  integer references student(student_id),
date_dropped TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
);
CREATE TABLE game_note(
    note_id serial primary key,
    note TEXT ,
    room INT,
    game_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
);