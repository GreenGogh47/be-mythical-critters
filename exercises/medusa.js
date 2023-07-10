class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  stare(person) {
    this.statues.push(person)
    person.toggleStoned()
      if ( this.statues.length > 3 ) {
        this.statues.shift().toggleStoned()
      }
  }
}

module.exports = Medusa;