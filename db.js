import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'PASTE_YOUR_MYSQLHOST_HERE',
  user: 'PASTE_YOUR_MYSQLUSER_HERE',
  password: 'PASTE_YOUR_MYSQLPASSWORD_HERE',
  database: 'PASTE_YOUR_MYSQLDATABASE_HERE',
  port: PASTE_YOUR_MYSQLPORT_HERE, // Use the number provided, usually 3306
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default db;
