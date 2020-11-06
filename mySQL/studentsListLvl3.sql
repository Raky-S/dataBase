---------------------------------------------------------studentsListLvl3



SELECT students.*,languages.name FROM students JOIN students_languages ON students.id = students_languages.student_id JOIN languages ON languages.id = students_languages.language_id WHERE students.id = 1

SELECT students.*,languages.name FROM students JOIN students_languages ON students.id = students_languages.student_id JOIN languages ON languages.id = students_languages.language_id WHERE students.id = 4

SELECT students.name,languages.name FROM students JOIN students_languages ON students.id = students_languages.student_id JOIN languages ON languages.id = students_languages.language_id WHERE students.id = 5

SELECT students.name, COUNT(students_languages.language_id)AS 'total' FROM students JOIN students_languages ON students.id = students_languages.student_id GROUP BY students.name


 -------------------------------------------------------bonus

SELECT name FROM students WHERE name LIKE '%e%'

SELECT city FROM students WHERE city LIKE '%i%'


