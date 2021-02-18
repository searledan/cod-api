const API = require('call-of-duty-api')();

export async function Login(username: string, password: string) {
    try {
        if (!API.isLoggedIn()) {
            await API.login(username, password);
        }
    } 
    catch(error) {
        throw new Error("Error logging in.");
    }
}