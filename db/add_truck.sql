insert into trucks (
    truck_name,
    food_type,
    image,
    contact,
    latitude,
    longitude,
    user_id,
    available
)
values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    false
);

select * from trucks;