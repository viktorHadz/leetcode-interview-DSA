/*
  The Map object holds key-value pairs and remembers the original insertion order of the keys.
  Any value may be used as either a key or a value.


  Useful patterns:

  for (const key of map.keys()) {
    console.log(key);
  }

  for (const value of map.values()) {
    console.log(value);
  }

  for (const [key, value] of map.entries()) {
    console.log(key, value);
  }
*/

// Problem 1 — Count names
const names = ["Vik", "John", "Vik", "Maria", "John", "Vik"];
const namesMap = new Map();

for (const name of names) {
    const nameCount = namesMap.get(name);
    nameCount ? namesMap.set(name, nameCount + 1) : namesMap.set(name, 1);
}

console.log("namesMap", namesMap);

// Problem 2 - Count numbers
const nums = [1, 2, 2, 3, 3, 3, 4];

const numsMap = new Map();

for (const num of nums) {
    const numCount = numsMap.get(num);
    numCount ? numsMap.set(num, numCount + 1) : numsMap.set(num, 1);
}
console.log("numsMap", numsMap);

// Problem 3 — First duplicate
const nums2 = [5, 1, 3, 5, 2, 3];

function returnFirstDuplicate(numsArr) {
    const seen = new Map();
    for (const num of numsArr) {
        if (seen.has(num)) return num;
        else seen.set(num, 1);
    }
}

console.log("First duplicate: ", returnFirstDuplicate(nums2));

// Problem 4 - Most frequent name

function mostFrequentStr(strArr) {
    const freqMap = new Map();
    let largestStr;
    let largestStrCount = 0;

    for (const str of strArr) {
        const count = freqMap.get(str);

        if (freqMap.has(str)) {
            freqMap.set(str, count + 1);
            if (count > largestStrCount) {
                largestStrCount = count;
                largestStr = str;
            }
        } else {
            freqMap.set(str, 1);
        }
    }

    return largestStr;
}

console.log("mostFrequentStr(names)", mostFrequentStr(names));

// Problem 5 - Two sum easy
const nums3 = [2, 7, 11, 15];
const target = 9;

// // Two sum with 2 pointers - doesnt always work if the array is not sorted
// function twoSum(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
//     let ans = [];

//     while (left < right) {
//         let sum = nums[left] + nums[right];

//         console.log("left + right (Sum): ", sum, "target: ", target);

//         if (sum === target) ans.push(left, right);
//         if (sum > target) right--;
//         if (sum < target) left++;
//     }
//     return ans;
// }

// twoSum(nums3, target);

function twoSum(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];
        seen.set(nums[i], i);

        if (seen.has(needed)) {
            return [seen.get(needed), i];
        }

        seen.set(nums[i], i);
    }
}

console.log("Two Sum: ", twoSum(nums3, target));

// Problem 6 — Group words by first letter
const words = ["apple", "banana", "apricot", "blueberry", "cherry"];

function groupByFirstLetter(words) {
    const letters = new Map();

    for (const word of words) {
        console.log("word", word);

        if (letters.has(word[0])) {
            const valueArr = letters.get(word[0]);
            valueArr.push(word);
            letters.set(word[0], valueArr);
        } else {
            letters.set(word[0], [word]);
        }
    }
    return letters;
}
console.log(groupByFirstLetter(words));

// Problem 7 - check if two words are anagrams
function checkForAnagram(word1, word2) {
    if (word1.length !== word2.length) return false;

    const freqMap1 = new Map();
    const freqMap2 = new Map();

    for (let i = 0; i < word1.length; i++) {
        const w1ltr = word1[i];
        const w2ltr = word2[i];

        if (freqMap1.has(w1ltr)) {
            freqMap1.set(w1ltr, freqMap1.get(w1ltr) + 1);
        } else {
            freqMap1.set(w1ltr, 1);
        }

        if (freqMap2.has(w2ltr)) {
            freqMap2.set(w2ltr, freqMap2.get(w2ltr) + 1);
        } else {
            freqMap2.set(w2ltr, 1);
        }
    }

    for (const [letter, count] of freqMap1) {
        if (freqMap2.get(letter) !== count) {
            return false;
        }
    }

    return true;
}

console.log(checkForAnagram("listen", "silent")); // true
console.log(checkForAnagram("hello", "world")); // false
console.log(checkForAnagram("aab", "abb")); // false

//
