import db from './db.js'; 

async function checkDatabase() {
  try {
 
    const [rows] = await db.query("SELECT 'Success!' AS message");
    console.log(rows[0].message);

   
    const [tables] = await db.query("SHOW TABLES");
    console.log("Your tables:", tables);

  } catch (err) {
    console.error("Error:", err.message);
  }
}

checkDatabase();