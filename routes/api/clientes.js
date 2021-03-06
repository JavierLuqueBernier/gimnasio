const router = require('express').Router(); //importante no olvidarse de poner esta linea
const { check, validationResult } = require('express-validator')

const Cliente = require('../../models/cliente');

//GET hhtp://localhost:3000/api/clientes
router.get('/', async (req, res) => {
    const rows = await Cliente.getAll();
    res.json(rows);
});

// POST http://localhost:3000/api/clientes
router.post('/', [
    //validadores
    check('nombre').isLength({ min: 3 }).isAlphanumeric(), //alphanumeric es para que solo se pueda utilizar letras, no numeros
    check('apellidos').isLength({ min: 3 }).isAlphanumeric(),
    check('direccion').isLength({ min: 3 }),
    check('email').isEmail(),
    check('edad').isNumeric(),
    check('sexo').isLength({ min: 1 }),
    check('cuota').isDecimal(),
    check('fecha_nacimiento'),
    check('dni').custom((value) => {
        return (/^[a-zA-Z0-9]{5,10}$/).test(value);
    })
], async (req, res) => {
    const errors = validationResult(req); // esta linea nos informa de si ha habido fallos en alguno de los middleware de arriba
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array())
    }
    const result = await Cliente.create(req.body);
    res.json(result);
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

module.exports = router; //Crasheaba por que faltaba esta linea, importante no olvidarse de ponerla