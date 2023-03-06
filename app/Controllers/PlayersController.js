import { appState } from "../AppState.js";
import { playersService } from "../Services/PlayersService.js";

export class PlayersController {

  constructor() {
    console.log('PlayersController loaded');
    this.drawPlayers()
  }

  drawPlayers() {
    let players = appState.players;
    let template = ``
    players.forEach(p => template += p.playerTemplate)
    document.getElementById('players').innerHTML = template
  }

  addPoint(name) {
    playersService.addPoint(name)
    this.drawPlayers()
  }

  losePoint(name) {
    playersService.losePoint(name)
    this.drawPlayers()
  }

  addPlayer() {
    playersService.addPlayer()
    console.log(appState.players);
    this.drawPlayers()
  }

}