import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Error } from '../shared/classes/error';
import { Warzone } from '../shared/interfaces/warzone';
import { Login } from '../shared/functions/global';
import { Validate } from '../shared/functions/validation';
import { GetWarzoneDetails } from '../shared/functions/warzone';

const httpTrigger: AzureFunction = async function (context: Context, request: HttpRequest) {
    var validationError: Error = await Validate(request);

    if (!validationError) {
        var loginUsername: string, loginPassword: string, username: string;
        var loginResult: void, warzoneResult: Warzone;

        loginUsername = (request.body && request.body.loginUsername);
        loginPassword = (request.body && request.body.loginPassword);
        username = (request.body && request.body.username);
        
        try {
            loginResult = await Login(loginUsername, loginPassword);
            warzoneResult = await GetWarzoneDetails(username);

            context.res = {
                status: 200,
                body: warzoneResult
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