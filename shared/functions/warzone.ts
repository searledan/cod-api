import { Error } from '../classes/error';
import { Warzone } from '../interfaces/warzone';
import { GetPlayer } from './player';

const API = require('call-of-duty-api')();

export async function GetWarzoneDetails(username: String): Promise<Warzone> {
    try {
        let warzone: Warzone;

        await GetPlayer(username).then(async player => {
            await API.MWwz(player.accountId, player.platform).then(data => {
                warzone = data;
            });
        });        

        return warzone;
    }
    catch (error) {
        throw new Error(500, error + "There has been an error getting Warzone details.");
    }
}