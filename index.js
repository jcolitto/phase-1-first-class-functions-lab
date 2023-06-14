// const returnFirstTwoDrivers = function (drivers) {
//   return drivers.slice(0, 2);
// };

// const allDrivers = ["Antonia", "Nuru", "Amari", "Mo"];
// console.log(returnFirstTwoDrivers(allDrivers)); // Output: ['Antonia', 'Nuru']

// //

// const returnLastTwoDrivers = function (drivers) {
//   return drivers.slice(-2);
// };

// const lastDrivers = ["Antonia", "Nuru", "Amari", "Mo"];
// const lastTwoDrivers = returnLastTwoDrivers(lastDrivers);

// console.log(lastTwoDrivers);

// //

const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {
  return function (value) {
    return fareMultiplier * value;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selector) {
  return selector(drivers);
}
