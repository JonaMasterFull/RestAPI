const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        // Estamos creando como una propiedad para ejecutarse al momento
        this.app = express();
        this.port  = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares = Son Funciones que añaden otra accion al Web Servers
        this.middlewares();

        // Rutas de mi Aplicacion
        this.routes();
    }

    // Son nuestras Funciones que se ejecutan al instante
    middlewares(){

        // CORS
        this.app.use(cors());

        // Parseo y Lectura del Body
        this.app.use( express.json());

        // Directorio Publico del Frontend
        this.app.use( express.static('public'));
        
    }

    // Es la Lista de Rutas
    routes(){
        
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
        
    }

    // Nuestro metodo del Server Puerto
    listen(){
        this.app.listen( this.port, () => {
            console.log(`Servidor Corriendo en el Puerto ${ this.port }`);
        });
    }
}

module.exports = Server