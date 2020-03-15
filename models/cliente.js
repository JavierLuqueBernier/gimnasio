const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * from clientes', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}

const create = ({ nombre, apellidos, direccion, email, edad, sexo, cuota, dni }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO clientes (nombre, apellidos, direccion, email, edad, sexo, cuota, fecha_nacimiento, dni) values (?,?,?,?,?,?,?,?,?)', [nombre, apellidos, direccion, email, edad, sexo, cuota, new Date(), dni], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
}

const updateById = (pBody, pClienteId) => {
    return new Promise((resolve, reject) => {
        db.query('update clientes set ? where id = ' + pClienteId, [pBody], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
}

const deleteById = (pClienteId) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE from clientes where id = ?', [pClienteId], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    });
}

module.exports = {
    getAll: getAll,
    create: create,
    updateById: updateById,
    deleteById: deleteById,
}