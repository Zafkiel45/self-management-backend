import { db } from "./connection";

db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INT PRIMARY KEY AUTOINCREMENT,
      name CHAR NOT NULL
      password CHAR NOT NULL
    )
`);

