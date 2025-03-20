import { db } from "../database/connection";

export const registerUser = (user: string, password: string) => {
    try {
        const insertQuery = db.prepare(`
            INSERT INTO users (name,password) VALUES (@name, @password)
        `);

        const transaction = db.transaction((user, password) => {
            insertQuery.run({
                name: user,
                password: password,
            });
        });

        transaction(user, password);

    } catch(err) {
        console.error(err);
    };
};