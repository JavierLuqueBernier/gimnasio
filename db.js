const mysql = require ('mysql')

exports.connect=()=>{
    const pool= mysql.createPool({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        port: DB_PORT,
        database: DB_DATABASE,
        });

    global.db=pool;
}