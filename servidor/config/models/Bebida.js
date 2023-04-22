const mongoose = require('mongoose')

const BebidaSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    codigo:{
        type: Number,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
    marca:{
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



module.exports = mongoose.model('Bebida', BebidaSchema)