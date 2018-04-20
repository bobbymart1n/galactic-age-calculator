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
}

export { AgeConversion };
