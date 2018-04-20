import { YearsToSeconds } from './YearsToSeconds.js';
class AgeConversion {
  constructor(age) {
    this.age = age;
    this.mercury = .24;
    this.venus = .62;
    this.mars = 1.88;
    this.jupiter = 11.86;
  }
  ageInSeconds() {
    return this.age * YearsToSeconds.prototype.yearSecondsMath();
  }
  ageOnMercury() {
    return this.age / this.mercury;
  }
  ageOnVenus() {
    return this.age / this.venus;
  }
  ageOnMars() {
    return this.age / this.mars;
  }
  ageOnJupiter() {
    return this.age / this.jupiter;
  }
}

export { AgeConversion };
