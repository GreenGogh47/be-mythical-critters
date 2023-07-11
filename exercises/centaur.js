class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = !this.standing;
    this.activity = 0;
  }

  shoot() {
    this.activity++;
    // this is the same as this.activity += 1
    // you can do the same with this.activity--
    if (this.activity < 3 && this.standing) {
      return "Twang!!!";
    } else {
      return this.no();
    }
  }

  run() {
    this.activity++;
    if (this.activity < 3 && this.standing) {
      return "Clop clop clop clop!!!";
    } else {
      return this.no();
    }
  }

  layDown() {
    this.layingDown = true;
    this.standing = false;
  }
  
  standUp() {
    this.layingDown = false;
    this.standing = true;
  }

  // toggleStand() {
  //   this.layingDown = !this.layingDown
  //   this.standing = !this.standUp
  // }

  sleep() {
    if (this.standing) {
      return "NO!";
    } else {
      this.activity = 0;
      this.cranky = false;
      return "ZZZZ";
    }
  }

  // drinkPotion() {
  //   if (this.standing) {
  //     if (!this.cranky) {
  //       this.cranky = true;
  //     } else {
  //       this.activity = 0;
  //       this.cranky = false;
  //     }
  //   } else {
  //     return 'Not while I\'m laying down!'
  //   }
  // }

  drinkPotion() {
    switch(this.statusChecker()) {
      case "Standing and not cranky":
        this.cranky = true;
        break;
      case "Standing and cranky":
        this.activity = 0;
        this.cranky = false;
        break;
      case "Not standing":
        return 'Not while I\'m laying down!';
    }
  }

  statusChecker() {
    if (this.layingDown) {
      return "Not standing";
    } else if (this.standing && this.cranky) {
      return "Standing and cranky";
    } else {
      return "Standing and not cranky";
    }
  }

  no() {
    this.cranky = true;
    return "NO!";
  }
}

module.exports = Centaur;