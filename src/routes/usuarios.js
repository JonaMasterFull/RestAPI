const { Router } = require('express');
const { usuariosGet, usuarioPut, usuarioPost, usuariosDelete, usuariosPath } = require('../controllers/usuariosController');

const router = Router();

router.get('/', usuariosGet);

router.post('/',  usuarioPost);

router.put('/:id',  usuarioPut);

router.delete('/',  usuariosDelete);

router.patch('/', usuariosPath);


module.exports = router;