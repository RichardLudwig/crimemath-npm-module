# CRIMEMATH NPM Module

This package contains mathematical formulas for users to quickly calculate outputs they need for criminological/criminalistic/public safety research purposes. This package is geared towards students studying these topics but anyone can use this package. There will simply be a learning curve if you are no used to using math in this way.

Contact me at my [website](https://richardludwig.com) if there is a formula you would like me to add to the module.


## GENERAL CRIMINOLOGY FORMULAS

```javascript
//Crime Rate Formula
let result = crimeRate(crimesReported, population);
console.log(result);
```

```javascript
//Clearance Rate Formula
let result = clearanceRate(reportedCrimesCleared, crimesReported);
console.log(result);
```

```javascript
// Arrest Rate Formula
let result = arrestRate(arrests, population);
console.log(result);
```

```javascript
// Crime Trend Rate Formula
// This formula is also referred to as the Percent Change Formula
let result = crimeTrendRate(currentYear, previousYear);
console.log(result);
```

```javascript
// Police Personnel Rate Formula
let result = policePersonnelRate(policePersonnel, population);
console.log(result);
```


## BALLISTICS FORMULAS

```javascript
// Kinetic Energy Formula
let result = kineticEnergy(bulletVelocity, bulletMass);
console.log(result);
```

```javascript
// Pounds to Grains Conversion Formula
let result = poundsToGrains(pounds);
console.log(result);
```

```javascript
// Grains to Pounds Conversion Formula
let result = grainsToPounds(grains);
console.log(result);
```

```javascript
// Ounces to Grains Conversion Formula
let result = ouncesToGrains(ounces);
console.log(result);
```

```javascript
// Grains to Ounces Conversion Formula
let result = grainsToOunces(grains);
console.log(result);
```

```javascript
// Grams to Grains Conversion Formula
let result = gramsToGrains(grams);
console.log(result);
```

```javascript
// Grains to Grams Conversion Formula
let result = grainsToGrams(grains);
console.log(result);
```

```javascript
// Inches to Millimeters Conversion Formula
let result = inchesToMillimeters(inches);
console.log(result);
```

```javascript
// Millimeters to Inches Conversion Formula
let result = millimetersToInches(millimeters);
console.log(result);
```


## FORENSIC TOXICOLOGY FORMULAS

```javascript
// BAC Formula (Widmark)
// for genderConstant, assign 0.73 for men and 0.66 for women
let result = bacLevel(ouncesAlcoholConsumed, bodyweightPounds, genderConstant, hoursSinceStartedDrinking);
console.log(result);
```
