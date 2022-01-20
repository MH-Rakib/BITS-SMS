# BITS-Student management System(Backend - JAVA, Frontend - React)

### `Maven Project`
The project has built using Maven./

### `Spring Web, Mysql driver, Spring Jpa`
These are the dependencies, that has used on this project./

### `React Functional Component`
React js has been used as a ui library of this project. Here i have used functional components. Also implemented `React Router` for routing and `Context Api` for state management. 


## `Run the Project`

### `Step: 1`

Create database named `student` on your mysql server.
Run the Backend(java) as a java spring boot project from your IDE ( STS recommended ). The server will open on port 8080 on your local machine.


### `Step: 2`
Run the Client as a React project on your local server.\
Run `npm install` on the project directory. It will install all the necessary packages for the frontend part.\
Run `npm start` on your terminal. It will automaticly open the frontend on port 3000 on your browser.

### `Step: 3`
You will find an interface where you will be able to add, update, read and delete students.


## `API Endpoints`


### `Get => http://localhost:8080/api/v1/students`
It will return all available students from the database.


### `Post => http://localhost:8080/api/v1/students`
You can add a student on your database using this endpoints. You have to pass the student object on the requrest body. \


### `Put => http://localhost:8080/api/v1/students`
You will be able to update data of any student.You have to pass the student object on the requrest body. \


### `Delete => http://localhost:8080/api/v1/students/{id}`
Delete any students informations using this endpoint. Here `{id}` id the url parameter.


