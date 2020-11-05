CREATE TABLE `school`.`students` ( `id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(30) NOT NULL , `city` VARCHAR(30) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

CREATE TABLE `school`.`languages` ( `id` INT NOT NULL , `Name` VARCHAR(30) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

CREATE TABLE `school`.`favorites` ( `id` INT NOT NULL AUTO_INCREMENT , `class` VARCHAR(30) NOT NULL , `sport` VARCHAR(30) NOT NULL , `student_id` INT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

CREATE TABLE `school`.`students_languages` ( `id` INT NOT NULL AUTO_INCREMENT , `student_id` INT NOT NULL , `language_id` INT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;







INSERT INTO `students` (`id`, `name`, `city`) VALUES ('1', 'Leandro', 'Buenos Aires'), ('2', 'Raky', 'Selibaby'), ('3', 'Lilia', 'Paris'), ('4', 'Linda', 'Blanc-Mesnil'), ('5', 'Samantha', 'Shery-City'), ('6', 'Eri', 'Kyoto')

INSERT INTO `languages` (`id`, `name`) VALUES ('1', 'Fulani'), ('2', 'French'), ('3', 'Arabic'), ('4', 'swahili'), ('5', 'Japanese')

INSERT INTO `favorites` (`id`, `class`, `sport`, `student_id`) VALUES ('1', 'Maths', 'Cricket', '2'), ('2', 'Music', 'Classic', '6'), ('3', ' Arts', 'Boxing', '1'), ('4', 'Literature', 'Tennis', '3'), ('5', 'Computer science', 'Tennis', '5'), ('6', 'Languages', 'Baseball', '4')

INSERT INTO `students_languages` (`id`, `student_id`, `language_id`) VALUES ('1', '1', '1'), ('2', '1', '2'), ('3', '2', '1'), ('4', '2', '3'), ('5', '3', '1'), ('6', '4', '1'), ('7', '4', '2'), ('8', '4', '4'), ('9', '4', '5'), ('10', '5', '1'), ('11', '5', '5'), ('12', '6', '2'), ('13', '6', '2'), ('14', '6', '3')

