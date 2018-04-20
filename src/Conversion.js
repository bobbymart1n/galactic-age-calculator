import { YearsToSeconds } from './yearsToSeconds.js';
class Conversion {
  constructor(age) {
    this.age = age;
  }
  ageInSeconds() {
    const seconds = this.age * YearsToSeconds.prototype.yearSecondsMath();
    console.log(seconds);
    return seconds;
  }
  secondsToYear() {
    // const seconds
  }
}

export { Conversion };
