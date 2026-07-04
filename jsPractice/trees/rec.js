function countTen() {
    for (let i = 1; i <= 10; i++) {
        console.log("value: ", i);
    }
}
countTen();

function countToTenRec(n, depth = 0) {
    const indent = "  ".repeat(depth);

    console.log(indent + "enter n =", n);

    if (n === 0) {
        console.log(indent + "base case, return 1");
        return 1;
    }

    let left = countToTenRec(n - 1, depth + 1);
    let right = countToTenRec(n - 1, depth + 1);

    let answer = left + right;

    console.log(
        indent + `n=${n}, left=${left}, right=${right}, return ${answer}`,
    );

    return answer;
}

console.log(countToTenRec(3));
