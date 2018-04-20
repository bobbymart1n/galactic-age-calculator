class Expectancy {
  constructor(age) {
    this.expectancy = age;
  }
  expectancyOnMercury() {
    return this.expectancy / .24;
  }
}

export { Expectancy };
