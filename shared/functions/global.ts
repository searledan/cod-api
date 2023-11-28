import { Error } from '../classes/error';

const API = require('call-of-duty-api')();

export function Login(username: string, ssoToken: string) {
    try {
        if (!API.isLoggedIn()) {
            API.loginWithSSO(username, ssoToken);
        }
    }
    catch (error) {
        throw new Error(500, "There has been an error logging in.");
    }
}