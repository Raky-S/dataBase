---------------------------------------------------CREATE TABLE

CREATE TABLE `agence`.`languages` ( `id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(30) NOT NULL , `candidate.id` INT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

CREATE TABLE `agence`.`programming` ( `id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(30) NOT NULL , `candidate.id` INT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;


---------------------------------------------------INSERT INTO


INSERT INTO `candidates` (`id`, `first_name`, `surname`, `dob`, `salary`, `portfolio`, `github`) VALUES ('1', 'Lilia', 'Tag', '2000-01-10', '12500', 'Oui', 'liliou.github'), ('2', 'Lean', 'Maradona', '2000-12-10', '20500', 'No', 'Leolean.github'), ('3', 'Linda', 'Salif', '2000-09-15', '14325', 'Oui', 'linlin.github'), ('4', 'Gab', 'Brielle', '2000-05-15', '16230', 'No', 'Gabgab.github'), ('5', 'John', 'Doe', '2000-09-09', '43320', 'Oui', 'Jonny.github')

UPDATE `candidates` SET `github` = 'Non' WHERE `candidates`.`id` = 1; UPDATE `candidates` SET `portfolio` = 'Non', `github` = 'Oui' WHERE `candidates`.`id` = 2; UPDATE `candidates` SET `github` = 'Non' WHERE `candidates`.`id` = 3; UPDATE `candidates` SET `portfolio` = 'Non', `github` = 'Oui' WHERE `candidates`.`id` = 4; UPDATE `candidates` SET `github` = 'Non' WHERE `candidates`.`id` = 5;

INSERT INTO `languages` (`id`, `name`, `candidate.id`) VALUES ('1', 'Java', '3'), ('2', 'Php', '5'), ('3', 'Python', '4'), ('4', 'SQL', '1'), ('5', 'Javascript', '2');

INSERT INTO `programming` (`id`, `name`, `candidate.id`) VALUES ('1', 'Node.js', '3'), ('2', 'Express', '5'), ('3', 'ReactNative', '4'), ('4', 'jQuery', '1'), ('5', 'MySQL', '2'), ('6', 'Node.js', '6'), ('7', 'React', '3');


---------------------------------------------------SELECT

SELECT * FROM `candidates`;

SELECT COUNT(`id`)AS 'total' FROM candidates;

SELECT surname FROM candidates WHERE `dob`>1990-11-06;

SELECT `first_name` FROM candidates WHERE `salary`< 15000;

SELECT `first_name` FROM `candidates` WHERE `portfolio`='Oui';

SELECT `first_name` FROM `candidates` WHERE `github`='Oui';

SELECT `first_name` FROM `candidates` WHERE `portfolio`='Oui' AND `github`= 'Oui'

SELECT `first_name` FROM candidates LEFT JOIN languages ON candidates.id = languages.candidate_id WHERE languages.name = 'Javascript'

SELECT `first_name` FROM candidates LEFT JOIN programming ON candidates.id = programming.candidate_id WHERE programming.name = 'React'

SELECT `first_name` FROM candidates LEFT JOIN programming ON candidates.id = programming.candidate_id WHERE programming.name = 'React' AND programming.name ='Express'