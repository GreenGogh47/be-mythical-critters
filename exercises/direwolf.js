class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || "Beyond the Wall";
    this.size = size || "Massive";
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true
  }

  protect(stark) {
    if (stark.location === this.home && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark);
      stark.toggleSafe();
      this.huntsWhiteWalkers = false;
    }
  }

  leave(stark) {
    const index = this.starksToProtect.indexOf(stark);
    if (index !== -1) {
      this.starksToProtect.splice(index, 1);
      stark.toggleSafe();
    }
  }
}

module.exports = Direwolf;