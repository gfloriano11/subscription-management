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
    subscription_path VARCHAR(255) NOT NULL,
    category_id INT NOT NULL,
    image VARCHAR(255) NULL,
    is_custom BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (category_id) REFERENCES category (id)
);

CREATE TABLE my_subscriptions(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    subscription_name VARCHAR(255) NOT NULL,
    subscription_path VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL, 
    users INT NOT NULL,
    due_date DATE NOT NULL,
    start_date DATE NOT NULL,
    payment_method VARCHAR(255) NOT NULL,
    category_id INT NOT NULL,
    image VARCHAR(255) NULL,
    logo VARCHAR(255) NULL,
    is_custom BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (category_id) REFERENCES category (id)
);

INSERT INTO category (category_name, category_path)
VALUES
('Streaming📽️', 'streaming'),
('Games🎮️', 'games'),
('Education🧑‍🎓️', 'education'),
('Music🎸', 'music'),
('HealthCare💪', 'healthcare');

INSERT INTO subscription (subscription_name, subscription_path, image, category_id, is_custom)
VALUES
('Netflix', 'netflix', '/src/assets/subscription_image/netflix.png', 1, FALSE),
('Disney+', 'disney-plus', '/src/assets/subscription_image/disney+.jpg', 1, FALSE),
('Prime Video', 'prime-video', '/src/assets/subscription_image/prime-video.svg', 1, FALSE),
('Max', 'max', '/src/assets/subscription_image/max.jpg', 1, FALSE),
('Crunchyroll', 'crunchyroll', '/src/assets/subscription_image/crunchyroll.jpg', 1, FALSE),
('Paramount+', 'paramount-plus', '/src/assets/subscription_image/paramount+.svg', 1, FALSE);
#('My Custom Service', 'my-custom-service', '/src/assets/subscription_image/custom.png', 1, TRUE);

-- If you want to do a select by category

-- SELECT s.subscription_name AS 'Subscription', c.category_name AS 'Category', s.is_custom 
-- FROM subscription AS s
-- INNER JOIN category AS c ON s.category_id = c.id;

-- If you want to do a select from your account's subscriptions

/* SELECT m.id, m.subscription_name, m.subscription_path,
m.price, m.users, m.due_date, m.start_date, m.payment_method, m.category_id, m.image
FROM my_subscriptions AS m; */