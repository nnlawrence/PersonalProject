update trucks
set truck_name = $2, food_type = $3, image = $4, contact = $5, latitude = $6, longitude = $7
where truck_id = $1;

select * from trucks where user_id = $8