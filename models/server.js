const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        // * Estamos creando como una propiedad para ejecutarse al momento
        this.app = express();
        this.port  = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';

        // * Middlewares = Son Funciones que añaden otra accion al Web Servers
        this.middlewares();

        // * Rutas de mi Aplicacion
        this.routes();
    }

    // ? Son nuestras Funciones que se ejecutan al instante
    middlewares(){

        // CORS
        this.app.use(cors());

        // Parseo y Lectura del Body en Post, Put y Path
        this.app.use( express.json());

        // Directorio Publico del Frontend al momento de Publicarlo
        this.app.use( express.static('public'));
        
    }

    // ? Es la Lista de Rutas de API REST
    routes(){
        
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
        
    }

    // ? Nuestro metodo del Server Puerto
    listen(){
        this.app.listen( this.port, () => {
            console.log(`Servidor Corriendo en el Puerto ${ this.port }`);
        });
    }
}

module.exports = Server