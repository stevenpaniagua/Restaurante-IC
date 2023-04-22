const mongoose = require('mongoose')

const ComidaSchema = mongoose.Schema({
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
    ingredientes:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    cantidad:{
        type: Number,
        required: true
    }
});



module.exports = mongoose.model('Comida', ComidaSchema)