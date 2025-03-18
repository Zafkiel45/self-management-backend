import 'dotenv/config';
import { Database } from "bun:sqlite";

export const db = new Database(process.env.DB_FILE_PATH, {
    strict: true,
    create: true,
});
