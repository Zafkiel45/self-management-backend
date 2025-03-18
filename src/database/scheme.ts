import 'dotenv/config';
import { Database } from "bun:sqlite";

const db = new Database(process.env.DB_FILE_PATH, {
    strict: true,
    create: true,
});

db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    )
`);