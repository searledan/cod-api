import { HttpRequest } from '@azure/functions';
import { Error } from '../classes/error';

export async function Validate(request: HttpRequest): Promise<Error> {
    var loginUsername: string, ssoToken: string, playerName: string;

    loginUsername = (request.body && request.body.loginUsername);
    ssoToken = (request.body && request.body.ssoToken);
    playerName = (request.query && request.query["name"]);

    if (!loginUsername) {
        return new Error(400, "Please pass a username in the request body.");
    }

    if (!ssoToken) {
        return new Error(400, "Please pass an SSO token in the request body.");
    }

    if (!playerName) {
        return new Error(400, "Please pass a player name in the URL.");
    }

    return null;
}