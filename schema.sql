CREATE DATABASE holiday_party_db;

USE holiday_party_db;

CREATE TABLE clients_table (
id INT AUTO_INCREMENT NOT NULL,
name varchar(255) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE party_table (
id INT AUTO_INCREMENT NOT NULL,
party_name varchar(255) NOT NULL,
party_type varchar(255) NOT NULL,
party_cost INT NOT NULL,
client_id INT NOT NULL,
FOREIGN KEY (client_id) REFERENCES clients_table(id),
PRIMARY KEY (id)
);

INSERT INTO clients_table (name) VALUES ("Jonny"), ("Bobby");

INSERT INTO party_table (party_name, party_type, party_cost, client_id) VALUES
 ("Jonny's New Years Party", "New Years", 600, 1),
 ("Jonny'sChinese New Years Party", "New Years", 500, 1),
 ("Bobby's Baby Shower Party", "Baby Shower", 200, 2),
 ("Bobby's Cousin Birthday Party", "Birthday Party", 300, 2),
 ("Bobby's Superbowl Party", "Superbowl Party", 250, 2);

