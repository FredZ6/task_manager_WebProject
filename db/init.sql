-- This file contains the SQL commands to create the database and tables for the task manager application.
CREATE DATABASE my_database;

-- Creating the users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL
);

-- Creating the tasks table
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    due_date DATE,
    title VARCHAR(255),
    user_id INTEGER REFERENCES users(id)
);
