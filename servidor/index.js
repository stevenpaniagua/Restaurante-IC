const express = require('express')
const conectarDB = require('./config/db')
const cors = require("cors")
//crear servidor
const app = express()

//conectamos a la bd
conectarDB();
app.use(cors())

app.use(express.json())

app.use('/api/empleados', require('./routes/empleado'))
app.use('/api/bebidas', require('./routes/bebida'))
app.use('/api/restaurantes', require('./routes/restaurante'))
app.use('/api/comidas', require('./routes/comida'))
app.use('/api/usuarios', require('./routes/usuario'))
app.use('/api/facturas', require('./routes/factura'))


app.listen(5000, ()=>{
    console.log('el servidor esta corriendo');
})