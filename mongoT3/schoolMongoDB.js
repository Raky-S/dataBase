
// ----------------------------exo1


db.getCollection("students").find({
    id: 3
});
db.getCollection("students").find({
    id: 5
});
db.getCollection("students").find({
    id: 1
}, { city: 1, name: 1, _id: 0 });
db.getCollection("students").find({
    id: 2
}, { city: 0, name: 1, _id: 0 });
db.getCollection("students").find({
    city: "paris"
}, { id: 1, name: 1, _id: 0 }) /
    db.getCollection("students").find({
        city: "paris"
    });
db.getCollection("students").find({
    city: "tokyo"
}, { name: 1, _id: 0 });

// ----------------------------exo2

db.students.aggregate([
    {
        $match: {
            id: 5,
        },
    },
    {
        $lookup: {
            from: "favorites",
            localField: "id",
            foreignField: "student_id",
            as: "studfav",
        },
    },
    { $unwind: "$studfav" },
    {
        $project: {
            "studfav.sport": 1,
            "studfav.class": 1,
            name: 1,
            city: 1,
            id: 1,
        },
    },
]);

db.students.aggregate([
    {
        $match: {
            id: 4,
        },
    },
    {
        $lookup: {
            from: "favorites",
            localField: "id",
            foreignField: "student_id",
            as: "studfav",
        },
    },
    { $unwind: "$studfav" },
    {
        $project: {
            "studfav.sport": 1,
            name: 1,
        },
    },
]);

db.students.aggregate([
    {
        $match: {
            id: 1,
        },
    },
    {
        $lookup: {
            from: "favorites",
            localField: "id",
            foreignField: "student_id",
            as: "studfav",
        },
    },
    { $unwind: "$studfav" },
    {
        $project: {
            "studfav.class": 1,
            name: 1,
        },
    },
]);

db.favorites.aggregate([
    {
        $match: {
            class: "music",
        },
    },
    {
        $lookup: {
            from: "students",
            localField: "student_id",
            foreignField: "id",
            as: "students_new",
        },
    },
    { $unwind: "$students_new" },
    {
        $project: {
            class: 1,
            "students_new.name": 1,
            "students_new.id": 1,
            "students_new.city": 1,
        },
    },
]);

db.favorites.aggregate([
    {
        $match: {
            sport: "tennis",
        },
    },
    {
        $lookup: {
            from: "students",
            localField: "student_id",
            foreignField: "id",
            as: "students_new",
        },
    },
    { $unwind: "$students_new" },
    { $project: { class: 1, "students_new.name": 1 } },
]);

db.favorites.aggregate([
    {
        $match: {
            class: "Arts",
        },
    },
    {
        $lookup: {
            from: "students",
            localField: "student_id",
            foreignField: "id",
            as: "newField",
        },
    },
    { $unwind: "$newField" },
    { $project: { class: 1, "newField.name": 1 } },
]);

db.students.count({ city: "paris" });

// ----------------------------exo3

db.students_languages.aggregate([
    {
        $match: {
            studentsID: 1,
        },
    },
    {
        $lookup: {
            from: "students",
            localField: "studentsID",
            foreignField: "id",
            as: "studentsnew",
        },
    },
    { $unwind: "$studentsnew" },
    {
        $lookup: {
            from: "languages",
            localField: "languageID",
            foreignField: "id",
            as: "students_new",
        },
    },
    { $unwind: "$students_new" },
    {
        $project: {
            "students_new.name": 1,
            "studentsnew.name": 1,
            "studentsnew.id": 1,
            "studentsnew.city": 1,
        },
    },
]);

db.students_languages.aggregate([
    {
        $match: {
            studentsID: 4,
        },
    },
    {
        $lookup: {
            from: "students",
            localField: "studentsID",
            foreignField: "id",
            as: "studentsnew",
        },
    },
    { $unwind: "$studentsnew" },
    {
        $lookup: {
            from: "languages",
            localField: "languageID",
            foreignField: "id",
            as: "students_new",
        },
    },
    { $unwind: "$students_new" },
    {
        $project: {
            "students_new.name": 1,
            "studentsnew.name": 1,
            "studentsnew.id": 1,
            "studentsnew.city": 1,
        },
    },
]);

db.students_languages.aggregate([
    {
        $match: {
            studentsID: 5,
        },
    },
    {
        $lookup: {
            from: "students",
            localField: "studentsID",
            foreignField: "id",
            as: "studentsnew",
        },
    },
    { $unwind: "$studentsnew" },
    {
        $lookup: {
            from: "languages",
            localField: "languageID",
            foreignField: "id",
            as: "students_new",
        },
    },
    { $unwind: "$students_new" },
    { $project: { "students_new.name": 1, "studentsnew.name": 1 } },
]);
