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

  // change() {
  //   this.human = !this.human
  //   this.wolf = !this.wolf
  //   if ( this.wolf ) {
  //     this.hungry = true;
  //   } else {
  //     this.hungry = false;
  //   }
  // }

  change() {
    this.human = !this.human;
    this.wolf = !this.wolf;
    this.hungry = this.wolf;
  }

  eat(victim) {
    if (this.hungry === false) {
      return "I cannot eat because I am not hungry.";
    } else {
      victim.kill()
      this.hungry = victim.alive
      this.change()
      return "YUM!";
    }
  }

  // This method doesn't work
  // eat(victim) {
  //   const canEat = this.hungry && victim.kill() && this.change() && "YUM!";
  //   return canEat || "I cannot eat because I am not hungry.";
  // }


  // L39
  // wolf() {
  //   return !this.human
  // }
}

module.exports = Werewolf;