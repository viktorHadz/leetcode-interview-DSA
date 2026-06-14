// const arr = [1, 3, 6, 4, 1, 2];
// const arr = [-1, -2, -3];
// const arr = [-1, -2, -3, 0, 1];
const arr = [1, 2, 10];
// Not related to sliding window
function largestNotOccuring(A) {
  A.sort((a, b) => a - b);
  console.log("Array", A);
  let largest = A.length - 1;
  let secLargest = A.length - 2;
  let difference = A[largest] - A[secLargest];

  console.log("A[largest]", A[largest]);
  console.log("difference", difference);
  if (A[largest] < 0) return 1;
  if (difference > 1) return A[largest] - 1;
  else return A[largest] + 1;
}

console.log(largestNotOccuring(arr));
// This is wrong
