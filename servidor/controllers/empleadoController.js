const Empleado = require("../config/models/Empleado");



exports.crearEmpleado = async (req,res)=>{
    try {
        let empleado;

        empleado = new Empleado(req.body);

        await empleado.save();
        res.send(empleado)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerEmpleados = async(req,res)=>{
    try {
        const empleados = await Empleado.find();
        res.json(empleados)    
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.actualizarEmpleado = async(req,res)=>{
    try {
        const {codigo, cedula, nombreEmpleado, apellido1Empleado, apellido2Empleado, numero, puesto, restaurante } = req.body
        let empleado = await Empleado.findById(req.params.id)

        if(!empleado){
           res.status(404) .json({msg:'No existe un empleado con ese id'})
        }

        empleado.codigo = codigo;
        empleado.cedula = cedula;
        empleado.nombreEmpleado = nombreEmpleado;
        empleado.apellido1Empleado = apellido1Empleado;
        empleado.cantidad = apellido2Empleado;
        empleado.numero = numero;
        empleado.puesto = puesto;
        empleado.restaurante = restaurante;
        

        empleado = await Empleado.findOneAndUpdate({_id:req.params.id}, empleado, {new: true})
        res.json(empleado)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerEmpleado = async(req,res)=>{
    try {
        
        let empleado = await Empleado.findById(req.params.id)

        if(!empleado){
           res.status(404) .json({msg:'No existe un empleado con ese id'})
        }

       
        res.json(empleado)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.eliminarEmpleado = async(req,res)=>{
    try {
        
        let empleado = await Empleado.findById(req.params.id)

        if(!empleado){
           res.status(404) .json({msg:'No existe un empleado con ese id'})
        }

       await Empleado.findOneAndRemove({_id:req.params.id})
       res.json({msg:'Empleado eliminado con exito'})
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}