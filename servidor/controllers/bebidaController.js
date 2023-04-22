const Bebida = require("../config/models/Bebida");



exports.crearBebida = async (req,res)=>{
    try {
        let bebida;

        bebida = new Bebida(req.body);

        await bebida.save();
        res.send(bebida)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerBebidas = async(req,res)=>{
    try {
        const bebidas = await Bebida.find();
        res.json(bebidas)    
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.actualizarBebida = async(req,res)=>{
    try {
        const {codigo, tipo, marca, precio, cantidad} = req.body
        let bebida = await Bebida.findById(req.params.id)

        if(!bebida){
           res.status(404) .json({msg:'No existe una bebida con ese id'})
        }

        bebida.codigo = codigo;
        bebida.tipo = tipo;
        bebida.marca = marca;
        bebida.precio = precio;
        bebida.cantidad = cantidad;

        bebida = await Bebida.findOneAndUpdate({_id:req.params.id}, bebida, {new: true})
        res.json(bebida)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerBebida = async(req,res)=>{
    try {
        
        let bebida = await Bebida.findById(req.params.id)

        if(!bebida){
           res.status(404) .json({msg:'No existe una bebida con ese id'})
        }

       
        res.json(bebida)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.eliminarBebida = async(req,res)=>{
    try {
        
        let bebida = await Bebida.findById(req.params.id)

        if(!bebida){
           res.status(404) .json({msg:'No existe una bebida con ese id'})
        }

       await Bebida.findOneAndRemove({_id:req.params.id})
       res.json({msg:'Producto eliminado con exito'})
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}