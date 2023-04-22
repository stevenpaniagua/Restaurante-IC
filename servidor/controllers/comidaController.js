const Comida = require("../config/models/Comida");



exports.crearComida = async (req,res)=>{
    try {
        let comida;

        comida = new Comida(req.body);

        await comida.save();
        res.send(comida)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerComidas = async(req,res)=>{
    try {
        const comidas = await Comida.find();
        res.json(comidas)    
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.actualizarComida = async(req,res)=>{
    try {
        const {codigo, tipo, ingredientes, precio, cantidad} = req.body
        let comida = await Comida.findById(req.params.id)

        if(!comida){
           res.status(404) .json({msg:'No existe una comida con ese id'})
        }

        comida.codigo = codigo;
        comida.tipo = tipo;
        comida.ingredientes = ingredientes;
        comida.precio = precio;
        comida.cantidad = cantidad;

        comida = await Comida.findOneAndUpdate({_id:req.params.id}, comida, {new: true})
        res.json(comida)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerComida = async(req,res)=>{
    try {
        
        let comida = await Comida.findById(req.params.id)

        if(!comida){
           res.status(404) .json({msg:'No existe una comida con ese id'})
        }

       
        res.json(comida)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.eliminarComida = async(req,res)=>{
    try {
        
        let comida = await Comida.findById(req.params.id)

        if(!comida){
           res.status(404) .json({msg:'No existe una comida con ese id'})
        }

       await Comida.findOneAndRemove({_id:req.params.id})
       res.json({msg:'Comida eliminado con exito'})
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}