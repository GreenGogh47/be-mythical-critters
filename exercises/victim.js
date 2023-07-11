class Victim {
  constructor(name) {
    this.name = name;
    this.alive = true;
  }

  kill() {
    this.alive = false;
  }
}

module.exports = Victim;