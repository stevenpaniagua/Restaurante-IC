const Restaurante = require("../config/models/Restaurante");



exports.crearRestaurante = async (req,res)=>{
    try {
        let restaurante;

        restaurante = new Restaurante(req.body);

        await restaurante.save();
        res.send(restaurante)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerRestaurantes = async(req,res)=>{
    try {
        const restaurantes = await Restaurante.find();
        res.json(restaurantes)    
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.actualizarRestaurante = async(req,res)=>{
    try {
        const {codigo, nombre, direccion, telefono} = req.body
        let restaurante = await Restaurante.findById(req.params.id)

        if(!restaurante){
           res.status(404) .json({msg:'No existe un restaurante con ese id'})
        }

        restaurante.codigo = codigo;
        restaurante.tipo = nombre;
        restaurante.direccion = direccion;
        restaurante.precio = telefono;

        restaurante = await Restaurante.findOneAndUpdate({_id:req.params.id}, restaurante, {new: true})
        res.json(restaurante)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerRestaurante = async(req,res)=>{
    try {
        
        let restaurante = await Restaurante.findById(req.params.id)

        if(!restaurante){
           res.status(404) .json({msg:'No existe un restaurante con ese id'})
        }

       
        res.json(restaurante)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.eliminarRestaurante = async(req,res)=>{
    try {
        
        let restaurante = await Restaurante.findById(req.params.id)

        if(!restaurante){
           res.status(404) .json({msg:'No existe un restaurante con ese id'})
        }

       await Restaurante.findOneAndRemove({_id:req.params.id})
       res.json({msg:'Restaurante eliminado con exito'})
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}