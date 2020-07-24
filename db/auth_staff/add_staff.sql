insert into staff
(first_name,last_name,email,password,student_id,profile_pic)
values
(${first_name}, ${last_name}, ${email},${password}, null,null)
returning *;
