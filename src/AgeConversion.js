import { YearsToSeconds } from './YearsToSeconds.js';
class AgeConversion {
  constructor(age) {
    this.age = age;
    this.mercuryYear = .24;
    this.venusYear = .62;
    this.marsYear = 1.88;
    this.jupiterYear = 11.86;
  }
  ageInSeconds() {
    return this.age * YearsToSeconds.prototype.yearSecondsMath();
  }
  ageOnMercury() {
    return this.age / this.mercuryYear;
  }
  ageOnVenus() {
    return this.age / this.venusYear;
  }
  ageOnMars() {
    return this.age / this.marsYear;
  }
  ageOnJupiter() {
    return this.age / this.jupiterYear;
  }
}

export { AgeConversion };
