const Factura = require("../config/models/Factura");



exports.crearFactura = async (req,res)=>{
    try {
        let factura;

        factura = new Factura(req.body);

        await factura.save();
        res.send(factura)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerFacturas = async(req,res)=>{
    try {
        const facturas = await Factura.find();
        res.json(facturas)    
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.actualizarFactura = async(req,res)=>{
    try {
        const {usuario, restaurante, empleado, comida, bebida, total} = req.body
        let factura = await Factura.findById(req.params.id)

        if(!factura){
           res.status(404) .json({msg:'No existe una factura con ese id'})
        }

        factura.usuario = usuario;
        factura.restaurante = restaurante;
        factura.empleado = empleado;
        factura.comida = comida;
        factura.bebida = bebida;
        factura.total = total;

        factura = await Factura.findOneAndUpdate({_id:req.params.id}, factura, {new: true})
        res.json(factura)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerFactura = async(req,res)=>{
    try {
        
        let factura = await Factura.findById(req.params.id)

        if(!factura){
           res.status(404) .json({msg:'No existe una factura con ese id'})
        }

       
        res.json(factura)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.eliminarFactura = async(req,res)=>{
    try {
        
        let factura = await Factura.findById(req.params.id)

        if(!factura){
           res.status(404) .json({msg:'No existe una factura con ese id'})
        }

       await Factura.findOneAndRemove({_id:req.params.id})
       res.json({msg:'Producto eliminado con exito'})
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}