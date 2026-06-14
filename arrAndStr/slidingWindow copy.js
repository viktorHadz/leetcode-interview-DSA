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
