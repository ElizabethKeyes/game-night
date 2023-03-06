import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";

class PlayersService {
  addPoint(name) {
    let player = appState.players.find(p => p.name == name)
    player.score++
    console.log('point added');
  }

  losePoint(name) {
    let player = appState.players.find(p => p.name == name)
    player.score--
    console.log('point subtracted');
  }

  addPlayer() {
    let name = window.prompt("Please enter your name")
    appState.players.push(new Player(name))
    console.log("new player", name);
  }
}

export const playersService = new PlayersService()