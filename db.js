const mysql = require ('mysql')

exports.connect=()=>{
    const pool= mysql.createPool({
        host:'127.0.0.1',
        user:'root',
        password:'',
        port:3306,
        database:'gimnasio02',
        });

    global.db=pool;
}