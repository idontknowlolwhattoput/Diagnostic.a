// src/backend/server.js
import express from 'express';
import pool from './db.js';

const app = express();
const PORT = 5000;

app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ success: true, time: result.rows[0].now });
  } catch (err) {
    console.error('❌ DB Test Failed:', err);
    res.status(500).json({ error: 'Failed to connect to DB' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
