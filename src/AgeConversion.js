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
    const seconds = this.age * YearsToSeconds.prototype.yearSecondsMath();
    return seconds;
  }
  ageOnMercury() {
    const mercuryAge = this.age / this.mercury;
    return mercuryAge;
  }
  ageOnVenus() {
    const venusAge = this.age / this.venus;
    return venusAge;
  }
  ageOnMars() {
    const marsAge = this.age / this.mars;
    return marsAge;
  }
  ageOnJupiter() {
    const jupiterAge = this.age / this.jupiter;
    return jupiterAge;
  }
}

export { AgeConversion };
