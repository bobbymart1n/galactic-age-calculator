import { YearsToSeconds } from './YearsToSeconds.js';
class AgeConversion {
  constructor(age) {
    this.age = age;
  }
  ageInSeconds() {
    const seconds = this.age * YearsToSeconds.prototype.yearSecondsMath();
    return seconds;
  }
  ageOnMercury() {
    const mercuryAge = this.age / .24;
    return mercuryAge;
  }
  ageOnVenus() {
    const venusAge = this.age / .62;
    return venusAge;
  }
  ageOnMars() {
    const marsAge = this.age / 1.88;
    return marsAge;
  }
  ageOnJupiter() {
    const jupiterAge = this.age / 11.86;
    return jupiterAge;
  }
}

export { AgeConversion };
