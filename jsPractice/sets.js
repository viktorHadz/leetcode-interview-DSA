/*
  Sets practice
  A set is a collection of unique values
  Some interesting things you can do with sets:
    - intersect, union, difference, symetricDifference, supersets of something,
  Set methods:
    - add()
    - clear()
    - delete()
    - has()
    - entries()
    - keys()
    - values()
  Cool things about sets:
    - searches in constant time (kinda - but acceptable in interviews)

  Turn array into a fast lookup table:
    const lookup = new Set(arr);

    if (lookup.has(target)) {
      // found instantly
    }

  Quick find duplicates in an array
    const seen = new Set();

    for (const item of arr) {
      if (seen.has(item)) {
        // duplicate found
      }

      seen.add(item);
    }


  Tiny caveat:
    not mathematically guaranteed always O(1) in every possible internal situation,
    usually fine in interviews
*/

// Problem 1 - Remove duplicates
const names = ["Vik", "John", "Vik", "Maria", "John"];
const dedupedNames = new Set(names);
console.log("Deduped names: ", dedupedNames);

// Problem 2 - Check if name exists
const target = "John";
function checkIfNameExists(target) {
  return dedupedNames.has(target);
}
console.log(
  `Target is: ${target}. Target exists:  ${checkIfNameExists(target)}`,
);

// Problem 3 - Common names
const listA = ["Vik", "John", "Maria", "Vik"];
const listB = ["Sam", "John", "Maria", "Peter"];
// return john and maria
const setOfListA = new Set(listA);
const setOfListB = new Set(listB);

// Intersection example
console.log("Intersection of set A and B", setOfListA.intersection(setOfListB));

// Intersection - handcoded example
let commonNames = new Set();
for (const name of setOfListA) {
  if (setOfListB.has(name)) {
    commonNames.add(name);
  }
}

console.log("commonNames", commonNames);

// Problem 4 — Names only in first list
const listA2 = ["Vik", "John", "Maria"];
const listB2 = ["John", "Sam"];
const setOfListA2 = new Set(listA2);
const setOfListB2 = new Set(listB2);

// Difference example
console.log("listB2.difference(A2)", setOfListA2.difference(setOfListB2));

// Difference - handcoded
let namesOnlyInFirst = new Set();

for (const name of setOfListA2) {
  if (!setOfListB2.has(name)) {
    namesOnlyInFirst.add(name);
  }
}

console.log("Difference: ", namesOnlyInFirst);

// Problem 5 — All unique names from both lists

// Union example
const listA3 = ["Vik", "John"];
const listB3 = ["John", "Maria", "Sam"];

const setOfListA3 = new Set(listA3);
const setOfListB3 = new Set(listB3);

console.log("setOfListA3.union(setOfListB3)", setOfListA3.union(setOfListB3));

// Union handcoded
const allNames = new Set();

for (const name of listA3) {
  allNames.add(name);
}

for (const name of listB3) {
  allNames.add(name);
}

console.log(allNames);
