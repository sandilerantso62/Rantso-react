const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "library_system"
});
db.connect((err)=>{
  if(err)
  {
    console.error(err);
  } else{
    console.log("Connected to MySQL");
  }
});
module.exports = db;
