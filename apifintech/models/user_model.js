const pool = require("./db");

const createUser = async (username, password) => {
  const { rows } = await pool.query(
    "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
    [username, password]
  );
  return rows[0];
};

const findUserByUsername = async (username) => {
  const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  return rows[0];
};

module.exports = { createUser, findUserByUsername };
