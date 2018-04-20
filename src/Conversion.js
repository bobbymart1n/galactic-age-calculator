class Conversion {
  constructor(age) {
    this.age = age;
  }
  yearInSeconds() {
    const years = this.age * 365 * 24 * 60 * 60
    console.log(years);
  }
}

export { Conversion };
