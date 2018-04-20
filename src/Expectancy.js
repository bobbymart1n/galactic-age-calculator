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
  expectancyOnMars() {
    return this.expectancy / 1.88;
  }
  expectancyOnJupiter() {
    return this.expectancy / 11.86;
  }
}

export { Expectancy };
