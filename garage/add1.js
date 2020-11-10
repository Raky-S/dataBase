const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/The_Garage',
    { useUnifiedTopology: true, useNewUrlParser: true })



const carSchema = new mongoose.Schema({
    brand: {
        type: String,
        enum: ['Bentley', 'Rolls-Royce', 'Ferrari', 'Lamborghini'],
        required: true
    },
    model: String,
    creationDate: {
        type: Date,
        default:Date.now
    },
    description: String,
}
) 
// console.log('carsSchema', carsSchema);
const CarsModel = mongoose.model('Car', carSchema);

// CarsModel.create({
//     brand: 'Lamborghini',
//     model: 'Aventador', 
//     description: 'Aventador est à 340 K !'
// }).then(data=>console.log(data))
// .catch(err=>console.log(err))

// CarsModel.create({
//     brand: 'Ferrari',
//     model: 'Portofino',
//     description: 'Aventador est à 200 K !'
// }).then(data=>console.log(data))
// .catch(err=>console.log(err))



// const Bent= new CarsModel({
//     brand:'Bentley',
//     model: 'Continetal',
//     description: ' Vivva sa SUV!, à partir de 200k!',
//     creationDate: 1999
// })


// const Rolls= new CarsModel({
//     brand:'Rolls-Royce',
//     model: 'Phantom',
//     description: ' à partir de 300K!',
//     creationDate: 2000
// })

// const resultBent= Bent.save()
// const resultRolls=  Rolls.save()