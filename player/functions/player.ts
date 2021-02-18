import { Player } from '../classes/player';

const API = require('call-of-duty-api')();

export async function GetPlayer(username: String, platform: String): Promise<Player> {
    try {
        return await API.FuzzySearch(username, platform);
    }
    catch(error) {
        throw new Error("Error getting player.");
    }
}