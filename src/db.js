// db.js
const mysql = require('mysql');

const pool = mysql.createPool({
  user: 'your_db_user',
  host: 'localhost',
  database: 'your_db_name',
  password: 'your_db_password',
  port: 3306, // Default MySQL port
});

module.exports = pool;
