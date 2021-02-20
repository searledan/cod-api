import { Error } from '../classes/error';

const API = require('call-of-duty-api')();

export async function Login(username: string, password: string) {
    try {
        if (!API.isLoggedIn()) {
            await API.login(username, password);
        }
    } 
    catch (error) {
        throw new Error(500, "There has been an error logging in.");
    }
}