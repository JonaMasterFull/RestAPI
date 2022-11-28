const { response, request } = require('express');

const usuariosGet =  (req = request, res = response) => {

    const { query, nombre = '', params, page = 1, limit = 10 } = req.query;

    res.json({
        msg: 'Get Api - Controlador',
        query,
        nombre,
        params,
        page,
        limit
    })
  }

const usuarioPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: 'Post Api',
        nombre,
        edad
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