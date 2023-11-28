import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Error } from '../shared/classes/error';
import { Player } from '../shared/interfaces/player';
import { Login } from '../shared/functions/global';
import { Validate } from '../shared/functions/validation';
import { GetPlayer } from '../shared/functions/player';

const httpTrigger: AzureFunction = async function (context: Context, request: HttpRequest) {
    var validationError: Error = await Validate(request);

    if (!validationError) {
        var loginUsername: string, ssoToken: string, playerName: string;
        var loginResult: void, playerResult: Player;

        loginUsername = (request.body && request.body.loginUsername);
        ssoToken = (request.body && request.body.ssoToken);
        playerName = (request.query && request.query["name"]);

        try {
            loginResult = Login(loginUsername, ssoToken);

            console.log(loginResult);

        
            playerResult = await GetPlayer(playerName);

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