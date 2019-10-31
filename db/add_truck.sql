insert into trucks (
    truck_name,
    food_type,
    image,
    contact,
    latitude,
    longitude
)
values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6
);

select * from trucks;