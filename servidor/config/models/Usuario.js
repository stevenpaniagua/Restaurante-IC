const mongoose = require('mongoose')

const UsuarioSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});



module.exports = mongoose.model('Usuario', UsuarioSchema)