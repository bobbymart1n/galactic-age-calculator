class Expectancy {
  constructor(age) {
    this.expectancy = age;
  }
  expectancyOnMercury() {
    return this.expectancy / .24;
  }
  expectancyOnVenus() {
    return this.expectancy / .62;
  }
}

export { Expectancy };
