import { YearsToSeconds } from './../src/YearsToSeconds.js';
import { AgeConversion } from './../src/Conversion.js';
import { Expectancy } from './../src/Expectancy.js';
describe('Galactic Age', function() {
  let date;
  let age;
  let expectancy;

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
    age = new AgeConversion(30);
    expect(age.ageOnMercury()).toEqual(125);
  });
  it('should calculate the users age to find out how old they are on Venus', function() {
    age = new AgeConversion(30);
    const ageShortened = parseFloat(age.ageOnVenus().toFixed(2));
    expect(ageShortened).toEqual(48.39);
  });
  it('should calculate the users age to find out how old they are on Mars', function() {
    age = new AgeConversion(30);
    const ageShortened = parseFloat(age.ageOnMars().toFixed(2));
    expect(ageShortened).toEqual(15.96);
  });
  it('should calculate the users age to find out how old they are on Jupiter', function() {
    age = new AgeConversion(30);
    const ageShortened = parseFloat(age.ageOnJupiter().toFixed(2));
    expect(ageShortened).toEqual(2.53);
  });
  it('should calculate the users age expectancy on Mercury', function() {
    expectancy = new Expectancy(84);
    const mercuryLifeExpectancy = expectancy.expectancyOnMercury();
    expect(mercuryLifeExpectancy).toEqual(350);
  });
  it('should calculate the users age expectancy on Venus', function() {
    expectancy = new Expectancy(84);
    const venusLifeExpectancy = parseFloat(expectancy.expectancyOnVenus().toFixed(2));
    expect(venusLifeExpectancy).toEqual(135.48);
  });
  it('should calculate the users age expectancy on Mars', function() {
    expectancy = new Expectancy(84);
    const marsLifeExpectancy = parseFloat(expectancy.expectancyOnMars().toFixed(2));
    expect(marsLifeExpectancy).toEqual(44.68);
  });
  it('should calculate the users age expectancy on Jupiter', function() {
    expectancy = new Expectancy(84);
    const jupiterLifeExpectancy = parseFloat(expectancy.expectancyOnJupiter().toFixed(2));
    expect(jupiterLifeExpectancy).toEqual(7.08);
  });
  it('should calculate how many years the user has left to live on Mercury', function() {
    age = new AgeConversion(30);
    expectancy = new Expectancy(84);
    const mercuryLifeExpectancy = expectancy.expectancyOnMercury();
    const ageOnMercury = age.ageOnMercury();
    const yearsLeft = mercuryLifeExpectancy - ageOnMercury;
    expect(yearsLeft).toEqual(225);
  });
  it('should calculate how many years the user has left to live on Venus', function() {
    age = new AgeConversion(30);
    expectancy = new Expectancy(84);
    const venusLifeExpectancy = expectancy.expectancyOnVenus();
    const ageOnVenus = age.ageOnVenus();
    const yearsLeft = parseFloat((venusLifeExpectancy - ageOnVenus).toFixed(2));
    expect(yearsLeft).toEqual(87.1);
  });
});
