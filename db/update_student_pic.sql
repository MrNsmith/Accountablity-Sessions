update student 
set profile_pic = $1
where student_id = $2;

select student_id, first_name, last_name , profile_pic from student
where student_id = $2;