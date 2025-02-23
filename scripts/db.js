const db = require('mysql2');
const pool = db.createPool(
    {
    "host": process.env.APP_HOST,
    "user": process.env.APP_USER,
    "password": process.env.APP_PASSWORD,
    "port": process.env.APP_PORT,
    "database": process.env.MYSQL_DATABASE
    }
);

module.exports = {pool};
