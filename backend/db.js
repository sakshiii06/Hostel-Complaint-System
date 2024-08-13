const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "satyam@123",
  host: "localhost",
  port: 5432,
  database: "Hostel"
});

pool.on("error", (error, client) => {
  console.log(error);
});

module.exports = {
  pool
};