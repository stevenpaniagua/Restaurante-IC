const mongoose = require('mongoose')

const RestauranteSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    codigo:{
        type: Number,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    direccion:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    }
});



module.exports = mongoose.model('Restaurante', RestauranteSchema)