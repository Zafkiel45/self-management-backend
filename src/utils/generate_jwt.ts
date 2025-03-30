import 'dotenv/config';
import { SignJWT } from 'jose';

const jwtHeader = 'HS256';
const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function generateWebToken(payload: string): Promise<string | void> {
    try {
        const jwt = await new SignJWT({payload})
        .setProtectedHeader({alg: jwtHeader}) // header of JWT
        .setIssuedAt() // register the time of token generation
        .setIssuer('http://localhost:3001') // who generate the token
        .setAudience('http://localhost:3001') // who can to use 
        .setExpirationTime('2h') // time until expirtaion
        .sign(secret) // the super secret

        return jwt;
    } catch(err) {
        console.error(err);
    };
};