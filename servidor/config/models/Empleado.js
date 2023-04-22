const mongoose = require('mongoose')

const EmpleadoSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    codigo:{
        type: Number,
        required: true
    },
    cedula:{
        type: Number,
        required: true
    },
    nombreEmpleado:{
        type: String,
        required: true
    },
    apellido1Empleado:{
        type: String,
        required: true
    },
    apellido2Empleado:{
        type: String,
        required: true
    },
    numero:{
        type: Number,
        required: true
    },
    puesto:{
        type: String,
        required: true
    },
    restaurante:{
        type: String,
        required: true
    }
});



module.exports = mongoose.model('Empleado', EmpleadoSchema)