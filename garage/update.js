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
    year:{ 
        type: Number,
    }
}
) 
console.log()
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



CarsModel.updateOne({ _id : "5faaae41db47bd64a4e1ebb8" }, { year: '2014' }, function(
      err,
      result
    )  {}  )