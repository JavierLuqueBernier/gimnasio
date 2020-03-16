const router = require('express').Router();

const Cliente = require('../../models/cliente');

//GET hhtp://localhost:3000/api/clientes
router.get('/', async (req, res) => {
    const rows = await Cliente.getAll();
    res.json(rows);
});

module.exports = router;