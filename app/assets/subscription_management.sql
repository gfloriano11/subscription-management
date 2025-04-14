DROP DATABASE IF EXISTS subscription_management;

CREATE DATABASE subscription_management;

USE subscription_management;

CREATE TABLE category(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	category_name VARCHAR(255) NOT NULL,
    category_path VARCHAR(255) NOT NULL
);

CREATE TABLE subscription(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    subscription_name VARCHAR(255) NOT NULL
);

/* INSERT INTO category
(category_name, category_path)
VALUES
('Streaming📽️', 'streaming');

INSERT INTO category
(category_name, category_path)
VALUES
('Games🎮️', 'games');

INSERT INTO category
(category_name, category_path)
VALUES
('Education🧑‍🎓️', 'education');

INSERT INTO category
(category_name, category_path)
VALUES
('Music🎸', 'music');

INSERT INTO category
(category_name, category_path)
VALUES
('HealthCare💪', 'healthcare'); 

INSERT INTO subscription
(subscription_name, category_id)
VALUES
('Netflix', 1);

SELECT s.subscription_name AS 'Subscription', c.category_name AS 'Category' 
FROM subscription AS s
INNER JOIN category AS c
ON s.category_id = c.id;

*/