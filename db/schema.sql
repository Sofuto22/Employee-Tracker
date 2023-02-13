DROP DATABASE if EXISTS employees;

CREATE DATABASE employees;

USE employees;

DROP TABLE if EXISTS department;

DROP TABLE if EXISTS role;

CREATE TABLE
    employees (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(20) NOT NULL
    );

CREATE TABLE
    department (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        first_name VARCHAR(20),
        last_name VARCHAR(30),
        salary DECIMAL NOT NULL,
    );

CREATE TABLE
    role (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR (15),
        department_id INT,
    );