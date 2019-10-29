create table trucks (
    truck_id serial primary key,
    truck_name varchar(200),
    food_type varchar(150),
    image varchar(750),
    contact varchar(150),
    latitude float,
    longitude float
); values (
    'Itakatl',
    'Mexican',
    'https://scontent.fhhr1-2.fna.fbcdn.net/v/t1.0-9/73357415_142305303828825_1907847128835686400_n.jpg?_nc_cat=103&_nc_oc=AQl79mt4GKLnBTvzZLu8u7B4HCrqhJEWEsxmjqEIsc2nrm3dOgFBOc3nB0Z9hgBgIc4&_nc_ht=scontent.fhhr1-2.fna&oh=b7306616f50953cab90801613f0290d8&oe=5E243694',
    'ariathnametzli@gmail.com',
    40.235119,
    -111.662193
);