import { Error } from '../classes/error';
import { Player } from '../interfaces/player';

const API = require('call-of-duty-api')();

export async function GetPlayer(username: String): Promise<Player> {
    try {
        let player: Player;

        await API.FuzzySearch(username, "uno").then(data => {
            player = data[0];
        });

        return player;
    }
    catch (error) {
        console.log(error);

        throw new Error(500, "There has been an error getting the player.");
    }
}