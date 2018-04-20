import { YearsToSeconds } from './../src/YearsToSeconds.js';
import { AgeConversion } from './../src/Conversion.js';
import { Expectancy } from './../src/Expectancy.js';
describe('Galactic Age', function() {
  let date;

  it('should convert users age into seconds', function() {
    const age = new AgeConversion(30);
    const ageSeconds = age.ageInSeconds();
    expect(ageSeconds).toEqual(946080000);
  });
  it('should get current date', function() {
    date = new Date();
    expect(date.toDateString()).toEqual("Fri Apr 20 2018");
  });
  it('should get current date in milliseconds', function() {
    expect(Date.parse("April 20, 2018")).toEqual(1524207600000);
  });
  it('should convert current date in milliseconds to seconds', function() {
    expect(Date.parse("April 20, 2018") / 1000).toEqual(1524207600);
  });
  it('should convert user birthdate to seconds', function() {
    expect(Date.parse("August 28, 1987") / 1000).toEqual(557132400);
  });
  it('should subtract birthday in seconds from current day in seconds', function() {
    expect((Date.parse("April 20, 2018") / 1000) - (Date.parse("August 28, 1987") / 1000)).toEqual(967075200);
  });
  it('should divide seconds difference from a year in seconds to get accurate age', function() {
    expect(967075200 / YearsToSeconds.prototype.yearSecondsMath()).toEqual(30.665753424657535);
  });
  it('should calculate the users age to find out how old they are on Mercury', function() {
    const age = new AgeConversion(30);
    expect(age.ageOnMercury()).toEqual(125);
  });
  it('should calculate the users age to find out how old they are on Venus', function() {
    const age = new AgeConversion(30);
    const ageShortened = parseFloat(age.ageOnVenus().toFixed(2));
    expect(ageShortened).toEqual(48.39);
  });
  it('should calculate the users age to find out how old they are on Mars', function() {
    const age = new AgeConversion(30);
    const ageShortened = parseFloat(age.ageOnMars().toFixed(2));
    expect(ageShortened).toEqual(15.96);
  });
  it('should calculate the users age to find out how old they are on Jupiter', function() {
    const age = new AgeConversion(30);
    const ageShortened = parseFloat(age.ageOnJupiter().toFixed(2));
    expect(ageShortened).toEqual(2.53);
  });
  it('should calculate the users age expectancy on Mercury', function() {
    const expectancy = new Expectancy(84);
    const mercuryLifeExpectancy = expectancy.expectancyOnMercury();
    expect(mercuryLifeExpectancy).toEqual(350);
  });
  it('should calculate the users age expectancy on Venus', function() {
    const expectancy = new Expectancy(84);
    const venusLifeExpectancy = parseFloat(expectancy.expectancyOnVenus().toFixed(2));
    expect(venusLifeExpectancy).toEqual(135.48);
  });
});
