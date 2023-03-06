import { appState } from "../AppState.js";


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

}