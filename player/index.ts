import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Error } from './classes/error';
import { Login } from './functions/global';
import { GetPlayer } from './functions/player';

const httpTrigger: AzureFunction = async function (context: Context, request: HttpRequest) {
    var login_username: string, login_password: string, username: string, platform: string, error: Error;

    login_username = (request.body && request.body.login_username);
    login_password = (request.body && request.body.login_password);
    username = (request.body && request.body.username);
    platform = (request.body && request.body.platform);

    if (!login_username || !login_password) {
        error = new Error(400, "Please pass a username & password in the request body.");
    }

    try {
        await Login(login_username, login_password);
    }
    catch {
        error = new Error(500, "There has been an error logging in.");
    }

    if (!username) {
        error = new Error(400, "Please pass a username in the request body.");
    }
    
    if (!platform) {
        platform = "uno";
    }

    if(error) {
        context.res = {
            status: error.Status,
            body: error.Message
        };
    }
    else {
        context.res = {
            status: 200,
            body: await GetPlayer(username, platform)
        };
    }
};

export default httpTrigger;