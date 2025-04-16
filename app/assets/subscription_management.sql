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
    subscription_name VARCHAR(255) NOT NULL,
    category_id INT NOT NULL,
    image VARCHAR(255) NOT NULL,
    FOREIGN KEY (category_id) REFERENCES category (id)
);

INSERT INTO category
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
(subscription_name, image, category_id)
VALUES
('Netflix', '/src/assets/subscription_image/netflix.png', 1);

INSERT INTO subscription
(subscription_name, image, category_id)
VALUES
('Disney+', '/src/assets/subscription_image/disney+.jpg', 1);

INSERT INTO subscription
(subscription_name, image, category_id)
VALUES
('Prime Video', '/src/assets/subscription_image/primevideo.svg', 1);

INSERT INTO subscription
(subscription_name, image, category_id)
VALUES
('Max', '/src/assets/subscription_image/max.jpg', 1);

INSERT INTO subscription
(subscription_name, image, category_id)
VALUES
('Crunchyroll', '/src/assets/subscription_image/crunchyroll.jpg', 1);

INSERT INTO subscription
(subscription_name, image, category_id)
VALUES
('Paramount+', '/src/assets/subscription_image/paramount+.svg', 1);

/*

SELECT s.subscription_name AS 'Subscription',
c.category_name AS 'Category' 
FROM subscription AS s
INNER JOIN category AS c
ON s.category_id = c.id;

*/