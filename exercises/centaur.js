class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.activity = 0
  }

  shoot() {
    this.activity += 1;
    if (this.activity < 4) {
      return "Twang!!!"
    } else {
      this.no()
    }
  }

  run() {
    this.activity += 1;
    if (this.activity < 4) {
      return "Clop clop clop clop!!!"
    } else {
      this.no()
    }
  }

  no() {
    this.cranky = true
    return "NO!"
  }
}

module.exports = Centaur;