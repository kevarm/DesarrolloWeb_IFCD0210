const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        cod: {
            type: String,
            unique: true,
            required: true
        },
        nombre: {
            type:String
        },
        apellidos: {
            type:String
        },
        edad: {
            type:Number
        },
        correo: {
            type:String,
            required: true,
            unique: true
        },
    }
)
module.exports = mongoose.model('user',UserSchema)