package hashing

import (
	"fmt"
)

/*
Given an array nums containing n distinct numbers in the range [0, n],
return the only number in the range that is missing from the array.
Example 1:

Input: nums = [3,0,1]

Output: 2

Explanation:

n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
2 is the missing number in the range since it does not appear in nums.
*/
func MissingNum(nums []int) int {
	nMap := make(map[int]struct{})
	for _, num := range nums {
		nMap[num] = struct{}{}
	}

	n := len(nums)

	for n >= 0 {
		_, has := nMap[n]
		if !has {
			return n
		}
		n--
	}

	return -1
}

// Can be solved using the Gaussian Sum Formula (used it in [recursion.js])
// totalSum = n(n+1)/2 totalSum - currentSum = missingElement
func MissingNumGauss(nums []int) int {
	n := len(nums)
	totalSum := n * (n + 1) / 2
	currentSum := 0

	for _, n := range nums {
		currentSum += n
	}
	fmt.Printf("totalSum(%v)-currentSum(%v)=%v\n", currentSum, totalSum, totalSum-currentSum)
	return totalSum - currentSum
}
