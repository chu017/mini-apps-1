DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE personal_information (
  id int NOT NULL AUTO_INCREMENT,
  full_name varchar(20) NOT NULL,
  email varchar(30) NOT NULL,
  password varchar(20) NOT NULL,
  PRIMARY KEY (ID)
);

insert into personal_information(full_name, email, password) values ('john johnson', 'johnjohnson@gmail.com', '123456');

/* Create other tables and define schemas for them here! */

CREATE TABLE shipping_address (
  id int NOT NULL AUTO_INCREMENT,
  addressline1 varchar(30) NOT NULL,
  addressline2 varchar(30) NOT NULL,
  city varchar(20) NOT NULL,
  state varchar(20) NOT NULL,
  zipcode varchar(20) NOT NULL,
  phone_number varchar(20) NOT NULL,
  PRIMARY KEY (ID)
);

insert into shipping_address(addressline1, addressline2, city, state, zipcode, phone_number) values ('111 jashon ave.', 'apt 111', 'san francisco', 'ca', '94111', '123456');

CREATE TABLE billing_information (
  id int NOT NULL AUTO_INCREMENT,
  credit_card_num varchar(20) NOT NULL,
  expiry_date varchar(20) NOT NULL,
  cvv varchar(20) NOT NULL,
  billing_zipcode varchar(20) NOT NULL,
  PRIMARY KEY (ID)
);

insert into billing_information(credit_card_num, expiry_date, cvv, billing_zipcode) values ('12345', '10_22', '111', '94111');


/*
EXECUTE.sql file: mysql -u root -p < schema.sql
ACCESS MySQL CLI: mysql -u root -p
SHOW DATABASES; USE [db name];
SHOW TABLES; DESC [table name];
SELECT * FROM [table name]; // SELECT * FROM groceries;
INSERT INTO [table name] (?, ?) VALUES (?, ?);
DELETE FROM groceries WHERE quantity=800;
*
UPDATE table
SET
  column1 = new_value1,
  column2 = new_value2,
WHERE
  condition;
*
*/

/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  For example, on a pairing station, it'll be
 *    mysql -u student -p < schema.sql
 *  and then you'll have to enter the password, student
 *  On your personal computer, if you haven't set up
 *  a password, it'll be
 *    mysql -u root < schema.sql
*/
