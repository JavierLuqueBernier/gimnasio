const router = require('express').Router();

const Ejercicio = require('../../models/ejercicio');

//GET hhtp://localhost:3000/api/ejercicios
router.get('/', async (req, res) => {
    const rows = await Ejercicio.getAll();
    res.json(rows);
});

module.exports = router;