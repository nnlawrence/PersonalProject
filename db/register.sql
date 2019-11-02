insert into users
(email, password, is_owner)
values
($1, $2, $3)

returning *;