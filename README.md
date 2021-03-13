NODE API
--------
1. npm init - used to create a package.json file
2. npm install mongodb --save - used to install mongodb packages


Mongoose:
---------
 Advantages: 
   Mongoose is going to waiting for the connection before it ever actually tries to make the query.

1. It is used for create models as well as create schemas and save those data then able to get those data with id from mongodb
2. able to find all, find by id 
3. It is used to create, read (find has single and many ),update(single and many), delete (single and many).


Mongodb package:
----------------

  1. It is used to create, read (find has single and many ),update(single and many), delete (single and many).
  2. able to find all, find by id 



JWT Token:

 it is a really strong crytographically secure string 


Todo:
check how to set status for different request in github project

https://github.com/afteracademy/nodejs-backend-architecture-typescript/blob/master/src/app.ts

https://github.com/AlaaMezian/NodeJs-backend-structure

node js backend project 2020 in github

https://docs.nestjs.com/recipes/sql-typeorm


Authentication:
 1. Once authentication is in a place all these are going to private routes which is means
 only you can update the data or manipulate .. no one else.
 2. Install crypo-js which has SHA256 which is comes from the number of bits that are the returning hash.
 3. Hashing is the one way algorithm. It is used to convert our password into some hash value (Cryptographic string). we always gets some constant result not original result [one type of SHA256]
 4. Bad idea when we store a plain text password into database. so what a lot of people do is they salt and hash their passwords.
 5. Using hashing, can't change the actual id or value (Cryptographic string) if you deny the access and does not change the actual value.
 6. Salt - used for prevent the trickery of the SHA256 hashing values (Cryptographic string) (Hashing value is constant value and it can convert into original value . this trickery can prevent using Salt).
 7. JWT is used to generate web token.
 {
  "id": 10,
  "iat": 1614526674 // create date
}

token ==> 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTYxNDUyNjY3NH0.v7ns866-jbalplRmNyj-18FOSLYWIVaXrQq35FKA2WY'
here, 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 - hatter
eyJpZCI6MTAsImlhdCI6MTYxNDUyNjY3NH0 - payload
v7ns866-jbalplRmNyj-18FOSLYWIVaXrQq35FKA2WY' - hash





