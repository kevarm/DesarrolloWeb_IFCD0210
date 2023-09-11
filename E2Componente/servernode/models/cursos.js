const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        nombre: {
            type:String,
            required: true
        },
        horas: {
            type:Number
        },
        inicio: {
            type:String
        },
        fin: {
            type:String,
        },
    }
)
module.exports = mongoose.model('user',UserSchema)