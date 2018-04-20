import { YearsToSeconds } from './YearsToSeconds.js';
class Conversion {
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
}

export { Conversion };
