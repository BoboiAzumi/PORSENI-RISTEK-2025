import { findUser } from "../repositories/auth.js";
/**
 * 
 * @param {string} username 
 * @param {string} password 
 */
export async function AuthService(username, password){
    return await findUser(username, password)
}