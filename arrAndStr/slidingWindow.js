/**
 * SOME GENERAL TEMPLATE EXAMPLES
 */

// function fn(arr):
//     left = 0
//     for (int right = 0; right < arr.length; right++):
//         Do some logic to "add" element at arr[right] to window

//         while WINDOW_IS_INVALID:
//             Do some logic to "remove" element at arr[left] from window
//             left++

//         Do some logic to update the answer

// function fn(nums, k):
//     left = 0
//     curr = 0
//     answer = 0
//     for (int right = 0; right < nums.length; right++):
//         curr += nums[right]
//         while (curr > k):
//             curr -= nums[left]
//             left++

//         answer = max(answer, right - left + 1)

//     return answer

// ---------------------------------------------------------------------------------------
// Given an integer array nums and an integer k,
// find the sum of the subarray with the largest sum whose length is k.
let arr = [3, -1, 4, 12, -8, 5, 6];

function lgSum(nums, k) {
  let curr = 0;
  for (let i = 0; i < k; i++) {
    curr += nums[i];
  }
  console.log("Current: ", curr);

  let ans = curr;

  for (let i = k; i < nums.length; i++) {
    curr += nums[i] - nums[i - k];
    console.log("nums[i]=", nums[i], "nums[i-k]=", nums[i - k]);
    console.log("nums[i] - nums[i-k]", nums[i] - [nums[i - k]]);
    ans = Math.max(ans, curr);
  }

  return ans;
}

console.log(lgSum(arr, 4));
