-- Let's Make a Game Plan
-- CREATE DATABSE
-- Create Tables
-- Add Information
DROP TABLE IF EXISTS Employee;
DROP TABLE IF EXISTS City;
DROP TABLE IF EXISTS Salaried_Employee;
DROP TABLE IF EXISTS Hourly_Employee;


CREATE TABLE City (
id  SERIAL PRIMARY KEY, 
name VARCHAR(30)
);

CREATE TABLE Employee (
  id SERIAL PRIMARY KEY,
  employee_name VARCHAR (50),
  employee_number INT,
  date_hired DATE,
  city_id int REFERENCES City(id)
);

CREATE TABLE Salaried_Employee (
id SERIAL PRIMARY KEY,
Anunal_Salary float,
Employee_id int REFERENCES Employee(id)
);

CREATE TABLE Hourly_Employee (
id SERIAL PRIMARY KEY,
Hourly_Rate float,
Employee_id int REFERENCES Employee(id)
);

INSERT INTO City  VALUES  (DEFAULT,'Los Angeles');
INSERT INTO City  VALUES  (DEFAULT,'New York City');
INSERT INTO City  VALUES  (DEFAULT,'Las Vegas');
INSERT INTO City  VALUES  (DEFAULT,'Detroit');
INSERT INTO City  VALUES  (DEFAULT,'Chicago');
INSERT INTO City  VALUES  (DEFAULT,'Houston');
INSERT INTO City  VALUES  (DEFAULT,'Miami');
INSERT INTO City  VALUES  (DEFAULT,'Boston');
INSERT INTO City  VALUES  (DEFAULT,'Atlanta');
INSERT INTO City  VALUES  (DEFAULT,'Dallas');

INSERT INTO Employee  VALUES  (DEFAULT,'Greg Adams',10, 'November 3, 2010', 1);
INSERT INTO Employee  VALUES  (DEFAULT,'Brittiny Taylor',213, 'November 8, 2010', 2);
INSERT INTO Employee  VALUES  (DEFAULT,'Sydney Bryant',214, 'November 12, 2010', 3);
INSERT INTO Employee  VALUES  (DEFAULT,'Aysia Grant',222, 'November 15, 2010', 4);
INSERT INTO Employee  VALUES  (DEFAULT,'Gianna Bruce',224, 'November 17, 2010', 5);
INSERT INTO Employee  VALUES  (DEFAULT,'Bruce Banner',226, 'November 19, 2010', 6);
INSERT INTO Employee  VALUES  (DEFAULT,'Nick Fury',228, 'November 21, 2010', 7);
INSERT INTO Employee  VALUES  (DEFAULT,'Gilbert Trent',230, 'November 22, 2010', 8);
INSERT INTO Employee  VALUES  (DEFAULT,'Bree Durant',232, 'November 27, 2010', 9);
INSERT INTO Employee  VALUES  (DEFAULT,'Eugene Burrow',235, 'November 30, 2010', 10);


INSERT INTO Hourly_Employee  VALUES  (DEFAULT, 20, 10);
INSERT INTO Hourly_Employee  VALUES  (DEFAULT, 30, 222);