import { HttpRequest } from '@azure/functions';
import { Error } from '../classes/error';

export async function Validate(request: HttpRequest): Promise<Error> {
    var loginUsername: string, loginPassword: string, username: string;

    loginUsername = (request.body && request.body.loginUsername);
    loginPassword = (request.body && request.body.loginPassword);
    username = (request.body && request.body.username);

    if (!loginUsername || !loginPassword) {
        return new Error(400, "Please pass a username & password in the request body.");
    }

    if (!username) {
        return new Error(400, "Please pass a username in the request body.");
    }

    return null;
}