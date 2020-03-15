const router = require('express').Router();

const Profesor = require('../../models/profesor');

//GET hhtp://localhost:3000/api/ejercicios
router.get('/', async (req, res) => {
    const rows = await Profesor.getAll();
    res.json(rows);
});

module.exports = router;