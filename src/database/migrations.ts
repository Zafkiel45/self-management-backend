import { db } from "./connection";

db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name CHAR NOT NULL,
      password CHAR NOT NULL
    )
`);

/*
    I did not why, but put in a comman in the final item of CREATE TABLE 
    generate an error. 
*/

/*
    I thought INT was parset to INTEGER, but this triggered an error. I do not
    know if the problem is the Bun API or the SQlite.
*/

