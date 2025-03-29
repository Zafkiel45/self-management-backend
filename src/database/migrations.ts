import { db } from "./connection";

db.run(`PRAGMA foreign_keys = ON;`);
db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name CHAR NOT NULL UNIQUE,
      password CHAR NOT NULL
    )
`);
db.run(`
    CREATE TABLE IF NOT EXISTS activities (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name CHAR NOT NULL UNIQUE, 
        user_id INTEGER,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )    
`);
db.run(`
    CREATE TABLE IF NOT EXISTS activities_log (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name CHAR NOT NULL UNIQUE, 
        activity_id INTEGER,
        FOREIGN KEY (activity_id) REFERENCES activities(id) ON DELETE CASCADE
    )    
`);


/*
    I did not why, but put in a comma in the final item of CREATE TABLE 
    generate an error. 
*/

/*
    I thought INT was parset to INTEGER, but this triggered an error. I do not
    know if the problem is the Bun API or the SQlite.
*/

