

export class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  get playerTemplate() {
    return `
    <div class="col-7 mb-2">
      <h4>${this.name}</h4>
    </div>
    <div class="col-4 d-flex mb-2">
      <button onclick="app.playersController.losePoint('${this.name}')" class="btn btn-danger ms-2">-</button>
      <h4 class="ms-2">${this.score}</h4>
      <button onclick="app.playersController.addPoint('${this.name}')" class="btn btn-success ms-2">+</button>
    </div>
    `
  }
}