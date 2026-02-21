import mysql from 'mysql2/promise';


const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "eligix_db",
  password: "pratham4016h", 
});


export default pool;