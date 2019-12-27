// This package contains mathematical formulas, for users to quickly calculate outputs they need for criminological/criminalistic/public safety research purposes. This package is geared towards students studying these topics but anyone is welcome to use this package. There will simply be a learning curve if you are no used to using math in this way.

// Contact me at my website (https://richardludwig.com) if there is a formula you would like me to add to the module.

// GENERAL CRIMINOLOGY FORMULAS
// Crime Rate Formula
exports.crimeRate = (crimesReported, population) => {
  return (crimesReported / population) * 100000;
};

// Clearance Rate Formula
exports.clearanceRate = (reportedCrimesCleared, crimesReported) => {
  return (reportedCrimesCleared / crimesReported) * 100;
};

// Arrest Rate Formula
exports.arrestRate = (arrests, population) => {
  return (arrests / population) * 100000;
};

// Crime Trend Rate Formula
// This formula is also referred to as the Percent Change Formula
exports.crimeTrendRate = (currentYear, previousYear) => {
  return ((currentYear - previousYear) / previousYear) * 100;
};

// Police Personnel Rate Formula
exports.policePersonnelRate = (policePersonnel, population) => {
  return (policePersonnel / population) * 1000;
};

// BALLISTICS FORMULAS
// Kinetic Energy Formula
exports.kineticEnergy = (bulletVelocity, bulletMass) => {
  return 0.5 * bulletMass * Math.pow(bulletVelocity, 2);
};

// Pounds to Grains Conversion Formula
exports.poundsToGrains = pounds => {
  return pounds * 7000;
};

// Grains to Pounds Conversion Formula
exports.grainsToPounds = grains => {
  return grains / 7000;
};

// Ounces to Grains Conversion Formula
exports.ouncesToGrains = ounces => {
  return ounces * 437.5;
};

// Grains to Ounces Conversion Formula
exports.grainsToOunces = grains => {
  return grains * 0.00229;
};

// Grams to Grains Conversion Formula
exports.gramsToGrains = grams => {
  return grams * 15.4324;
};

// Grains to Grams Conversion Formula
exports.grainsToGrams = grains => {
  return grains * 0.648;
};

// Inches to Millimeters Conversion Formula
exports.inchesToMillimeters = inches => {
  return inches * 25.4;
};

// Millimeters to Inches Conversion Formula
exports.millimetersToInches = millimeters => {
  return millimeters * 0.03937;
};
