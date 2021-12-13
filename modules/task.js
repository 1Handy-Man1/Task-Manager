const mongoose = require('mongoose')

// So what is a scheme?
// const TaskSchema = new mongoose.Schema({
//     name:String,
//     completed:Boolean
// })
// This is basic validation not advanced


const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Must Provide Your Name"],
        trim:true,
        maxlength:[20,'Name Cannot Be More than 20 Characters']
    },
    completed:{
        type:Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Task', TaskSchema)