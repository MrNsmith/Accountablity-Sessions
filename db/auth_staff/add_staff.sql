insert into staff
(first_name, last_name, password, email, profile_pic)
values
(${first_name},${last_name},${password},${email}, null)
returning *;