const Estado = require('./Estado');
const EstadoListo = require('./EstadoListo');

class EstadoSinAgua extends Estado {
    //este es el metodo que se ejecuta cuando se hace una solicitud
  manejarSolicitud(contexto) {
    console.log("sin agua. por favor, llena el tanque.");
      //despues de que la solicitud se maneja, cambiamos el estado de la maquina de café
    contexto.cambiarEstado(new EstadoListo());
  }
}

module.exports = EstadoSinAgua;
