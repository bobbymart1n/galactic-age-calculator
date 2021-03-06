# Galactic Age Caclulator
An OO programming project for Epicodus

## By Bobby Martin

# Description
This is an application that calculates what age the user is if they are on another planet.

# Specifications
* Program will convert users age into seconds
  * Input Example: **30**
  * Output Example: **946080000**
* Program will get current date
  * Input Example: **04.20.2018**
  * Output Example: **04.20.2018**
* Program will get current date in milliseconds
  * Input Example: **04.20.2018**
  * Output Example: **1524207600000**
* Program will convert current time in milliseconds to seconds
  * Input Example: **1524207600000 / 1000**
  * Output Example: **1524207600**
* Program will take users birthdate and convert it into seconds
  * Input Example: **08.28.1987**
  * Output Example: **557132400**
* Program will compare birthdate in seconds to current date in seconds to get an accurate age in seconds
  * Input Example: **1524207600 - 557132400**
  * Output Example: **967075200**
* Program will compare birthdate in seconds to current date in seconds to get an accurate age in years
  * Input Example: **967075200 / 31536000**
  * Output Example: **30.665753424657535**
* Program will return the users age in Mercury years
  * Input Example: **30 / .24**
  * Output Example: **125**
* Program will return the users age in Venus years
  * Input Example: **30 / .62**
  * Output Example: **48.38**
* Program will return the users age in Mars years
  * Input Example: **30 / 1.88**
  * Output Example: **16.27**
* Program will return the users age in Jupiter years
  * Input Example: **30 / 11.86**
  * Output Example: **2.52**
* Program will calculate how many years the user has left to live on each planet
  * Input Example: **84 / .24 = 350 - 125 = 225**
  * Output Example: **You have 225 more Mercury years to live**
* Program will calculate how many years the user has lived past life expectancy
  * Input Example: **90**
  * Output Example: **You have lived 25 Mercury years longer than the expected 350 Mercury years**

# Setup Requirements
* Clone this repository
* Run npm install to install all dependencies
* Run npm run start to build and start the development environment

# Technologies
* HTML
* CSS
* JavaScript
* Webpack
* Jasmine
* Karma

This project uses the _MIT License_
&copy; **Bobby Martin** 2018
