// Map stuff
/*
  The map() method of Array instances creates a new array
  populated with the results of calling a provided function
  on every element in the calling array.
*/
// Map over the array executing the provided fn on each element

const mapNums = [1, 4, 9, 16];
const mapped = mapNums.map((x) => x * 2);
console.log("map:", mapped);

// Filter stuff
/*
  The filter() method of Array instances creates a shallow copy of a portion of a given array,
  filtered down to just the elements from the given array that pass the test
  implemented by the provided function.
*/
// Filter the array, including only the elements that pass the test in the given fn

const filterStrs = [
  "spray",
  "elite",
  "exuberant",
  "destruction",
  "present",
  "wanker",
];
const filterRes = filterStrs.filter((word) => word.length > 6);
console.log("Filter: ", filterRes);

// Reduce stuff
/*
  Executes a function on all elements in the array.
  Returns one value. Which is the acumulated value
  Can provide a initialValue to start from
*/
// Whatever you return from reduce becomes the accumulator in the next iteration.

const reduceNums = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = reduceNums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log("Reduce: ", sumWithInitial);

// Sort stuff
/*
  Need to provide it with a compareFn
  nums.sort((a, b) => a - b); // ascending
  nums.sort((a, b) => b - a); // descending
*/

console.log("---------------------------------------------------------");

// Practice

// Maps
// Problem 1 - Double the numbers

const nums = [1, 2, 3, 4];
const pMapNums = nums.map((num) => num * 2);
console.log("Practice Map: ", pMapNums);

// Problem 2 - Uppercase them
const names = ["vik", "john", "maria"];
const upper = names.map((name) => name.toLocaleUpperCase());
console.log("Uppercase: ", upper);

// Problem 3 - Extract names from users
const users = [
  { name: "Vik", age: 30 },
  { name: "Alex", age: 25 },
  { name: "Maria", age: 40 },
];
const userNames = users.map((user) => user.name);
console.log("User names: ", userNames);

// Problem 4 - add tax to prices
const prices = [10, 20, 30];
const addTax = prices.map((price) => (price += price * 0.2));
console.log("Prices: ", prices, "\n", "Price with tax: ", addTax);

// Filter
// Problem 5 -  keep only even numbers
const pFilterNums = [1, 2, 3, 4, 5, 6];
const filterEven = pFilterNums.filter((num) => num % 2 == 0);
console.log("Filter even numbers: ", filterEven);

// Problem 6 - keep names longer than 4 letters
const pNames = ["Vik", "Alexander", "John", "Maria"];
const filterNames4 = pNames.filter((name) => name.length > 4);
console.log("Filter Names: ", filterNames4);

// Problem 7 - Adults only
const people = [
  { name: "Tom", age: 17 },
  { name: "Sarah", age: 22 },
  { name: "Mike", age: 15 },
  { name: "Anna", age: 31 },
];
const adults = people.filter((person) => person.age > 18);
console.log("Adults: ", adults);

// Reduce
// Problem 8 - Sum numbers
const pReduceNums = [1, 2, 3, 4];
const sumNums = pReduceNums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
);
console.log("Sum nums: ", sumNums);

// Problem 9 - Multiply numbers
const pReduceNumsProd = [2, 3, 4];
const productNums = pReduceNumsProd.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
);
console.log("Product of numbers: ", productNums);

// Problem 10 - Find the biggest number
const pCountNums = [5, 12, 3, 99, 1];
let biggestNum = 0;
const countNums = pCountNums.reduce((acc, curVal) => {
  if (curVal > acc) biggestNum = curVal;
  return (acc, curVal, biggestNum);
});
console.log("Biggest number: ", countNums);

// Refactored for clarity
const countNumsProperly = pCountNums.reduce((acc, curVal) => {
  if (curVal > acc) {
    return curVal;
  }
  return acc;
}, nums[0]);
console.log("Biggest num proper: ", countNumsProperly);

// Problem 11 - count letters
const letters = ["a", "b", "a", "c", "b", "a"];
const letterMap = new Map();
const pCountLetters = letters.reduce((letterMap, currLetter) => {
  // the letter exists, count it
  if (letterMap.has(currLetter)) {
    console.log("Current Letter Exists", letterMap.has(currLetter));
    let existingLetter = letterMap.get(currLetter);

    letterMap.set(currLetter, existingLetter + 1);
  } else {
    // the letter doesnt exist add to map
    letterMap.set(currLetter, 1);
  }

  return letterMap;
}, letterMap);

console.log("LetterMap", pCountLetters);

// sexier looking version of the above solution
const letters2 = ["a", "b", "a", "c", "b", "a"];

const letterMap2 = letters.reduce((map, currLetter) => {
  if (map.has(currLetter)) {
    map.set(currLetter, map.get(currLetter) + 1);
  } else {
    map.set(currLetter, 1);
  }

  return map;
}, new Map());
console.log(letterMap);

// Problem 12 - group users by role
const usersRole = [
  { name: "Vik", role: "admin" },
  { name: "John", role: "user" },
  { name: "Maria", role: "admin" },
  { name: "Sam", role: "user" },
];

const usersByRole = usersRole.reduce((groupedByRole, user) => {
  const userRole = user.role;

  if (groupedByRole[userRole] == null) {
    groupedByRole[userRole] = [];
  }
  groupedByRole[userRole].push(user);

  console.log("groupedByRole", groupedByRole);

  return groupedByRole;
}, {});
console.log("Users by role: ", usersByRole);
// Above has a bug
