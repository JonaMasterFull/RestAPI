const { response, request } = require('express');
const Usuario = require('../models/usuariosModel')
const bcryptjs = require('bcryptjs')


const usuariosGet =  (req = request, res = response) => {

   // const { query, nombre = '', params, page = 1, limit = 10 } = req.query;

    req.body

    res.json({
        msg: 'Get Api - Controlador'
    })
  }

const usuarioPost = async (req, res) => {

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    // Verificar que el correo existe
    const existeEmail = await Usuario.findOne({ correo })

    if ( existeEmail ){
      return res.status(400).json({ msg: 'Correo ya existe' });
    }

    // Encriptar la contraseña
      // Genera el numero de caracteres Salt
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt)

    // Guardar en BD
    await usuario.save()

    res.status(201).json({
        usuario
    })
  }

const usuarioPut = (req, res) => {

    const { id } = req.params

    res.status(400).json({
        msg: 'Put Api',
        id
    })
  }

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'Delete Api'
    })
  }

const usuariosPath =  (req, res) => {
    res.json({
        msg: 'Patch Api'
    })
  }

module.exports = {
    usuariosGet,
    usuarioPut,
    usuarioPost,
    usuariosDelete,
    usuariosPath
}