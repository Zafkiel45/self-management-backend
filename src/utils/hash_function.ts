import * as argon2 from 'argon2';

export async function hashingPassword(password: string): Promise<string | undefined> {
    try {
        return await argon2.hash(password);
    } catch(err) {
        console.error(err); 
    };
};