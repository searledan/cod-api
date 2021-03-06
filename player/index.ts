import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Error } from '../shared/classes/error';
import { Player } from '../shared/interfaces/player';
import { Login } from '../shared/functions/global';
import { Validate } from '../shared/functions/validation';
import { GetPlayer } from '../shared/functions/player';

const httpTrigger: AzureFunction = async function (context: Context, request: HttpRequest) {
    var validationError: Error = await Validate(request);

    if (!validationError) {
        var loginUsername: string, loginPassword: string, username: string;
        var loginResult: void, playerResult: Player;

        loginUsername = (request.body && request.body.loginUsername);
        loginPassword = (request.body && request.body.loginPassword);
        username = (request.body && request.body.username);
        
        try {
            loginResult = await Login(loginUsername, loginPassword);
            playerResult = await GetPlayer(username);

            context.res = {
                status: 200,
                body: playerResult
            };
        }
        catch (error) {
            context.res = {
                status: error.status,
                body: error.message
            };
        }
    }
    else {
        context.res = {
            status: validationError.status,
            body: validationError.message
        };
    }
};

export default httpTrigger;