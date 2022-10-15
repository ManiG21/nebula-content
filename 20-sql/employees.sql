-- Let's Make a Game Plan
-- CREATE DATABSE
-- Create Tables
-- Add Information
DROP TABLE IF EXISTS employee CASCADE;
DROP TABLE IF EXISTS salaried_employee CASCADE;
DROP TABLE IF EXISTS hourly_employee CASCADE;
DROP TABLE IF EXISTS city CASCADE;

CREATE TABLE city (
  id SERIAL PRIMARY KEY,
  city VARCHAR (30)
);

CREATE TABLE employee (
  id SERIAL PRIMARY KEY,
  employee_name varchar (50),
  employee_number varchar (10),
  date_hired DATE,
  city_id INTEGER REFERENCES city (id)
);
CREATE TABLE hourly_employee (
  id SERIAL PRIMARY KEY,
  hourly_rate float,
  employee_id INT REFERENCES employee(id)
);

CREATE TABLE salaried_employee (
  id SERIAL PRIMARY KEY,
  annual_salary float,
  employee_id INT REFERENCES employee(id)
);


INSERT INTO city (city) VALUES ('New York');
INSERT INTO city (city) VALUES ('Los Angeles');
INSERT INTO city (city) VALUES ('Chicago');
INSERT INTO city (city) VALUES ('Houston');
INSERT INTO city (city) VALUES ('Philadelphia');
INSERT INTO city (city) VALUES ('Phoenix');
INSERT INTO city (city) VALUES ('San Antonio');
INSERT INTO city (city) VALUES ('San Diego');
INSERT INTO employee (employee_name, employee_number, date_hired, city_id) VALUES ('John', '123', '2017-01-01', 1);
INSERT INTO employee (employee_name, employee_number, date_hired, city_id) VALUES ('Jane', '456', '2017-01-01', 2);
INSERT INTO employee (employee_name, employee_number, date_hired, city_id) VALUES ('Joe', '789', '2017-01-01', 3);
INSERT INTO employee (employee_name, employee_number, date_hired, city_id) VALUES ('Jill', '101', '2017-01-01', 4);
INSERT INTO employee (employee_name, employee_number, date_hired, city_id) VALUES ('Jack', '102', '2017-01-01', 5);
INSERT INTO salaried_employee (annual_salary, employee_id) VALUES (75000, 1);
INSERT INTO salaried_employee (annual_salary, employee_id) VALUES (120000, 2);
INSERT INTO salaried_employee (annual_salary, employee_id) VALUES (57000, 3);
INSERT INTO salaried_employee (annual_salary, employee_id) VALUES (85000, 4);
INSERT INTO hourly_employee (hourly_rate, employee_id) VALUES (22, 2);
INSERT INTO hourly_employee (hourly_rate, employee_id) VALUES (32.50, 3);
INSERT INTO hourly_employee (hourly_rate, employee_id) VALUES (23, 4);
INSERT INTO hourly_employee (hourly_rate, employee_id) VALUES (47.50, 5);



-- INSERT INTO City  VALUES  (DEFAULT,'Los Angeles');
-- INSERT INTO City  VALUES  (DEFAULT,'New York City');
-- INSERT INTO City  VALUES  (DEFAULT,'Las Vegas');
-- INSERT INTO City  VALUES  (DEFAULT,'Detroit');
-- INSERT INTO City  VALUES  (DEFAULT,'Chicago');
-- INSERT INTO City  VALUES  (DEFAULT,'Houston');
-- INSERT INTO City  VALUES  (DEFAULT,'Miami');
-- INSERT INTO City  VALUES  (DEFAULT,'Boston');
-- INSERT INTO City  VALUES  (DEFAULT,'Atlanta');
-- INSERT INTO City  VALUES  (DEFAULT,'Dallas');

-- INSERT INTO Employee  VALUES  (DEFAULT,'Greg Adams',10, 'November 3, 2010', 1);
-- INSERT INTO Employee  VALUES  (DEFAULT,'Brittiny Taylor',213, 'November 8, 2010', 2);
-- INSERT INTO Employee  VALUES  (DEFAULT,'Sydney Bryant',214, 'November 12, 2010', 3);
-- INSERT INTO Employee  VALUES  (DEFAULT,'Aysia Grant',222, 'November 15, 2010', 4);
-- INSERT INTO Employee  VALUES  (DEFAULT,'Gianna Bruce',224, 'November 17, 2010', 5);
-- INSERT INTO Employee  VALUES  (DEFAULT,'Bruce Banner',226, 'November 19, 2010', 6);
-- INSERT INTO Employee  VALUES  (DEFAULT,'Nick Fury',228, 'November 21, 2010', 7);
-- INSERT INTO Employee  VALUES  (DEFAULT,'Gilbert Trent',230, 'November 22, 2010', 8);
-- INSERT INTO Employee  VALUES  (DEFAULT,'Bree Durant',232, 'November 27, 2010', 9);
-- INSERT INTO Employee  VALUES  (DEFAULT,'Eugene Burrow',235, 'November 30, 2010', 10);


-- INSERT INTO Hourly_Employee  VALUES  ( 20, 10);
-- INSERT INTO Hourly_Employee  VALUES  ( 30, 222);
-- INSERT INTO Hourly_Employee  VALUES  ( 25, 224);
-- INSERT INTO Hourly_Employee  VALUES  (23, 226);