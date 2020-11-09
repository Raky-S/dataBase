// ----------------------------insert


db.students.insert({id:1, name:'Leandro', city:'Buenos Aires'})
db.students.insert({id:2, name:'Steeven', city:'Shery-City'})
db.students.insert({id:3, name:'Lilia', city:'marseille'})
db.students.insert({id:4, name:'Eri', city:'tokyo'})
db.students.insert({id:5, name:'gab', city:'paris'})
db.students.insert({id:6, name:'linda', city:'paris'})


db.languages.insert({id:1, name:'french'})
db.languages.insert({id:2,name:'swahili'})
db.languages.insert({id:3,name:'japanese'})
db.languages.insert ({id:4,name:'arabic'})
db.languages.insert({id:5, name:'mandarin'})


db.favorites.insert({id:1,class:'maths',sport:'criket',studentsID:2})
db.favorites.insert({id:2,class:'music',sport:'hit-hop',studentsID:6})
db.favorites.insert({id:3,class:'arts',sport:'boxing',studentsID:1})
db.favorites.insert({id:4,class:'litterature',sport:'tennis',studentsID:3})
db.favorites.insert({id:5,class:'computer sciences',sport:'tennis',studentsID:5})
db.favorites.insert({id:6,class:'arts',sport:'baseball',studentsID:4})


db.students_languages.insert({id:1,studentsID:1,languageID:1})
db.students_languages.insert({id:2,studentsID:1,languageID:2})
db.students_languages.insert({id:3,studentsID:2,languageID:1})
db.students_languages.insert({id:4,studentsID:2,languageID:3})
db.students_languages.insert({id:5,studentsID:3,languageID:1})
db.students_languages.insert({id:6,studentsID:4,languageID:1})
db.students_languages.insert({id:7,studentsID:4,languageID:2})
db.students_languages.insert({id:8,studentsID:4,languageID:4})
db.students_languages.insert({id:9,studentsID:4,languageID:5})
db.students_languages.insert({id:10,studentsID:5,languageID:1})
db.students_languages.insert({id:11,studentsID:5,languageID:5})
db.students_languages.insert({id:12,studentsID:6,languageID:1})
db.students_languages.insert({id:13,studentsID:6,languageID:2})
db.students_languages.insert({id:14,studentsID:6,languageID:3})

// ----------------------------exo1


db.getCollection('students').find({ id: 3 })
db.getCollection('students').find({ id: 5 })
db.getCollection('students').find({ id: 1 }, { city: 1, name: 1, _id: 0 })
db.getCollection('students').find({ id: 2 }, { city: 0, name: 1, _id: 0 })
db.getCollection('students').find({ city: 'paris' }, { id: 1, name: 1, _id: 0 }) / db.getCollection('students').find({ city: 'paris' })
db.getCollection('students').find({ city: 'tokyo' }, { name: 1, _id: 0 })


// ----------------------------exo2





// ----------------------------exo3