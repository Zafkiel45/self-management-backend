import { db } from "../database/connection";
import { hashingPassword } from "../utils/hash_function";

export const registerUser = async (user: string, password: string) => {
  try {
    const insertQuery = db.prepare(`
            INSERT INTO users (name,password) VALUES (@name, @password)
        `);

    const transaction = db.transaction((user, password) => {
      return insertQuery.run({
        name: user,
        password: password,
      });
    });

    return transaction(user, (await hashingPassword(password)));

  } catch (err) {
    console.error(err);
  }
};
