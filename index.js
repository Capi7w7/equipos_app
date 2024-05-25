const express = require('express');
const app = express();
const port = 3001;

const {equipos} = require("./equipos");

const {getEquipos, getEquipoById} = require("./controllers/equipos.controllers");


app.get("/", getEquipos);

app.get("/:id", getEquipoById);














app.listen(port,()=>{
    console.log(`servidor corriendo en el puerto: ${port}`)
});