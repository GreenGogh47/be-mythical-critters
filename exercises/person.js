class Person {
  constructor(name) {
    this.name = name;
    this.stoned = false
  }

  toggleStoned() {
    this.stoned = !this.stoned
  }
}

module.exports = Person;