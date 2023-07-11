class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true
    // L39
    // this.wolf = !this.human
    this.wolf = false
    this.hungry = false
  }

  change() {
    this.human = !this.human
    this.wolf = !this.wolf
    if ( this.wolf ) {
      this.hungry = true;
    } else {
      this.hungry = false;
    }
  }

  eat(victim) {
    if (this.hungry === false) {
      return "I cannot eat because I am not hungry.";
    } else {
      this.hungry = false
      victim.alive = false
      this.change()
      return "YUM!";
    }
  }

  // L39
  // wolf() {
  //   return !this.human
  // }
}

module.exports = Werewolf;