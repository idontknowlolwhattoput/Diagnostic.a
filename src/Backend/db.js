// index.js
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'lmaoyeet21', // ✅ Make sure this is a string
  database: 'postgres',
});

pool
  .connect()
  .then(() => {
    console.log("✅ Connected to PostgreSQL!");
    return pool.end(); // Close the connection
  })
  .catch((err) => {
    console.error("❌ Connection failed:", err.message);
  });

  export default pool;
