create database usermanagement;

create table user(
id int primary key,
first_name varchar(100),
last_name varchar(100),
email varchar(100),
phone varchar(100),
comments text,
status  varchar(100)  not null 
);
-- Assuming your table is named "user"
INSERT INTO user (id, first_name, last_name, email, phone, comments, status)
VALUES
    (1, 'John', 'Doe', 'john.doe@example.com', '555-1234', 'Comment 1', 'Active'),
    (2, 'Jane', 'Smith', 'jane.smith@example.com', '555-5678', 'Comment 2', 'Inactive'),
    (3, 'Bob', 'Johnson', 'bob.johnson@example.com', '555-7890', 'Comment 3', 'Active'),
    (4, 'Alice', 'Williams', 'alice.williams@example.com', '555-2345', 'Comment 4', 'Inactive'),
    (5, 'Charlie', 'Brown', 'charlie.brown@example.com', '555-6789', 'Comment 5', 'Active'),
    (6, 'Eva', 'Miller', 'eva.miller@example.com', '555-4567', 'Comment 6', 'Inactive'),
    (7, 'David', 'Davis', 'david.davis@example.com', '555-8901', 'Comment 7', 'Active'),
    (8, 'Sophie', 'Clark', 'sophie.clark@example.com', '555-3456', 'Comment 8', 'Inactive'),
    (9, 'George', 'Garcia', 'george.garcia@example.com', '555-6789', 'Comment 9', 'Active'),
    (10, 'Emma', 'Evans', 'emma.evans@example.com', '555-1234', 'Comment 10', 'Inactive'),
    (11, 'Frank', 'Fisher', 'frank.fisher@example.com', '555-5678', 'Comment 11', 'Active'),
    (12, 'Olivia', 'Owens', 'olivia.owens@example.com', '555-8901', 'Comment 12', 'Inactive'),
    (13, 'Henry', 'Hill', 'henry.hill@example.com', '555-2345', 'Comment 13', 'Active'),
    (14, 'Lily', 'Lee', 'lily.lee@example.com', '555-6789', 'Comment 14', 'Inactive'),
    (15, 'Samuel', 'Scott', 'samuel.scott@example.com', '555-3456', 'Comment 15', 'Active'),
    (16, 'Grace', 'Gordon', 'grace.gordon@example.com', '555-7890', 'Comment 16', 'Inactive'),
    (17, 'Thomas', 'Turner', 'thomas.turner@example.com', '555-1234', 'Comment 17', 'Active'),
    (18, 'Chloe', 'Carter', 'chloe.carter@example.com', '555-5678', 'Comment 18', 'Inactive'),
    (19, 'William', 'Ward', 'william.ward@example.com', '555-8901', 'Comment 19', 'Active'),
    (20, 'Zoe', 'Zimmerman', 'zoe.zimmerman@example.com', '555-2345', 'Comment 20', 'Inactive');
