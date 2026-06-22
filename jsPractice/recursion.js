function recursiveCountdown(n) {
    if (n === 0) return;
    console.log(n);
    recursiveCountdown(n - 1);
}

// recursiveCountdown(10);

// Ex. 2 Print numbers from 1 up to n
function countUp(target, start) {
    if (start > target) return;

    console.log(start);
    countUp(target, start + 1);
}

countUp(10, 1);

// Ex. 3
function printEvensDown(n) {
    if (n === 0) return;

    if (n % 2 === 0) console.log("Got even: ", n);

    printEvensDown(n - 1);
}
printEvensDown(10);

// Ex. 4
function printOddsDown(n) {
    if (n === 0) return;

    if (n % 2 !== 0) console.log("Got odd: ", n);

    printOddsDown(n - 1);
}
printOddsDown(10);

// Ex. 5 sum from n down to 1 return sum alone
function sumFromN(n, sum = 0) {
    if (n === 0) return sum;

    sum += n;
    console.log("sum:", sum);
    // need to return otherwise the result cant get passed down the stack
    return sumFromN(n - 1, sum);
}

console.log("Sum from N: ", sumFromN(5));

// Ex 6 return product from down to 1
function productToN(n, product = 1) {
    if (n === 0) return product;

    product *= n;

    console.log("product: ", product);
    return productToN(n - 1, product);
}

console.log("Product to N: ", productToN(4));

// Ex 7 print character backwards
function printCharBackwards(word, char = word.length - 1) {
    if (char < 0) return;

    console.log(word[char]);

    printCharBackwards(word, char - 1);
}

printCharBackwards("cat");

// Ex 8 Print array items
function printArray(arr, idx = 0) {
    if (idx === arr.length) return;

    console.log("arrItem: ", arr[idx]);

    printArray(arr, idx + 1);
}

printArray([10, 20, 30]);

// Ex 9 Print arr sum
function sumArray(arr, idx = 0, sum = 0) {
    if (idx === arr.length) return sum;

    return sumArray(arr, idx + 1, sum + arr[idx]);
}

console.log("Sum of array: ", sumArray([10, 20, 30]));

// Ex 10 Count how many times a value appears
function countValue(arr, target, freq = new Map(), idx = 0) {
    if (idx === arr.length) return freq.get(target);

    if (freq.has(arr[idx])) {
        freq.set(arr[idx], freq.get(arr[idx]) + 1);
    } else {
        freq.set(arr[idx], 1);
    }

    idx++;

    return countValue(arr, target, freq, idx);
}

console.log("Freq count arr: ", countValue([1, 2, 1, 3, 1], 1));

function reverse(str, idx = str.length - 1, revStr = []) {
    if (idx < 0) return revStr;

    revStr.push(str[idx]);
    idx--;

    return reverse(str, idx, revStr);
}

console.log("Reversed string: ", reverse("hello"));
