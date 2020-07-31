select gs.slip_id, gs.played_by , s.first_name, s.last_name, gs.played_with, st.first_name as student_first,st.last_name as student_last
from game_room_one gs


inner join student s
on gs.played_by = s.student_id

inner join student st 
on gs.played_with = st.student_id