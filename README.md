<img alt="Nodejs" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"> <img alt="Javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/> <img alt="Postgres" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"> <img alt="Sequelize" src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"> <img alt="DigitalOcean" src="https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white">

A working api for Blog App is a web application that allows users to create, read, update, and delete (CRUD) blog posts. It is built using Node.js and Express on the server side and PostgresSQL as the database.

API URL - http://api.itsadityap.me/

Documentation Link - https://documenter.getpostman.com/view/18836262/2s8Z6x1YSa

# Blog App Backend

Relational Schema Design

 ```Multiple one to many relations.```
 
![2](https://storage-aditya.s3.ap-south-1.amazonaws.com/SchemaDesignBlogAp.png)

### Endpoints

* ```/api/signup```    
  Signup into the blog app.
  
  
* ```/api/login```    
  Login into the blog app.
  
  
* ```/api/posts```   
  Get, Put, Delete , Post mehtods to perform CRUD on posts.
  

* ```/api/like```   
  To Like a post, using a POST Request.
  

* ```/api/unlike```    
  To Unlike a post, using a POST Request.
  

* ```/api/comments```    
  Get, Put, Delete , Post mehtods to perform CRUD on comments.
  

* ```/api/users/:id```   
  To get all the user data by passing ID as a param using a GET Request.
  
  
* ```http://api.itsadityap.me/```   
  Home Route just to check if the API is working.
  

## Full Documentation

Read the full documentation [here.](https://documenter.getpostman.com/view/18836262/2s8Z6x1YSa)  
