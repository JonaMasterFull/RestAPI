const { Schema, model } = require('mongoose')

const UsuariosShema = Schema({
    nombre: {
        type: 'string',
        required: [true, 'El nombre es obligario']
    },
    correo: {
        type: 'string',
        required: [true, 'El Correo es obligario'],
        unique: true
    },
    password: {
        type: 'string',
        required: [true, 'El password es obligario'],
    },
    img: {
        type: 'string'
    },
    rol: {
        type: 'string',
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado:{ 
        type: 'boolean',
        default: true
    },
    google: {
        type: 'boolean',
        default: false
    }
})

module.exports = model('Usuario', UsuariosShema)