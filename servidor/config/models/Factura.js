const mongoose = require('mongoose')

const FacturaSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    usuario:{
        type: String,
        required: true
    },
    restaurante:{
        type: String,
        required: true
    },
    empleado:{
        type: String,
        required: true
    },
    comida:{
        type: String,
        required: true
    },
    bebida:{
        type: String,
        required: true
    },
    total:{
        type: Number,
        required: true
    }
});



module.exports = mongoose.model('Factura', FacturaSchema)