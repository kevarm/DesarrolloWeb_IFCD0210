const mongoose = require ('mongoose')
const CursoSchema = new mongoose.Schema(
    {
        _id: String,
        name: String,
        idtarea: String,
        descripcion: String,
        puntuacion: Number,
        estado: Boolean
    }
)
module.exports = mongoose.model('curso', CursoSchema)