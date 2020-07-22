insert into student
(first_name, last_name, password, profile_pic)
values
(${first_name},${last_name},${password}, null)
returning *;