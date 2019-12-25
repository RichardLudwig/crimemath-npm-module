// This package contains mathematical formulas, for users to quickly calculate outputs they need for criminological/criminalistic/public safety research purposes. This package is geared towards students studying these topics but anyone is welcome to use this package. There will simply be a learning curve if you are no used to using math in this way.

// Consult the technical documentation to learn how to "call" these functions, and contact me at my website (https://richardludwig.com) if there is a formula you would like me to add to the module.

// Crime Rate Formula
exports.crimeRate = (crimesReported, population) => {
  /*
  x is assigned # of crimes reported
  y is assigned # of population
  */
  return (crimesReported / population) * 100000;
};

// Clearance Rate Formula
exports.clearanceRate = (x, y) => {
  /*
  x is assigned # of reported crimes cleared
  y is assigned # of crimes reported
  */
  return (x / y) * 100;
};

// Arrest Rate Formula
exports.arrestRate = (x, y) => {
  /*
  x is assigned # of arrests
  y is assigned # of total population
  */
  return (x / y) * 100000;
};

// Crime Trend Rate Formula
// This formula is also referred to as the Percent Change Formula
exports.crimeTrendRate = (x, y) => {
  /*
  x is assigned current year value
  y is assigned prev year value
  */
  return ((x - y) / y) * 100;
};

// Police Personnel Rate Formula
exports.policePersonnelRate = (x, y) => {
  /*
  x is assigned # police personnel
  y is assigned # of total population
  */
  return (x / y) * 1000;
};
