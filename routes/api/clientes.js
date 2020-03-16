const router = require('express').Router();
const { check, validationResult } = require('express-validator')

const Cliente = require('../../models/cliente');

//GET hhtp://localhost:3000/api/clientes
router.get('/', async (req, res) => {
    const rows = await Cliente.getAll();
    res.json(rows);
});

//PUT http://localhost:3000/api/clientes/:pClienteId
router.put('/:pClienteId', async (req, res) => {
    const result = await Cliente.updateById(req.body, req.params.pClienteId);
    res.json(result)
});


// DELETE http://localhost:3000/api/clientes
router.delete('/', async (req, res) => {
    const result = await Cliente.deleteById(req.body.id);
    res.json(result);
});

module.exports = router;