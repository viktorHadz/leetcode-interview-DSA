/*
Prefix sum is a technique that can be used on arrays (of numbers, usually).
The idea is to create an array prefix where prefix[i]
is the sum of all elements up to the index i (inclusive).
For example, given nums = [5, 2, 1, 6, 3, 8],
we would have prefix = [5, 7, 8, 14, 17, 25].

Because 5+2=7 (prefix[1]), 7+1=8 (prefix[2]) ... and so on
*/
package arrandstr

import (
	"fmt"
)

// I'll try to code it myself first
//
// ---- This is the key pattern  ----
func FindArrPrefix(nums []int) []int {
	prefix := []int{nums[0]}
	for i := 1; i < len(nums); i++ {
		prefix = append(prefix, nums[i]+prefix[len(prefix)-1])
	}
	fmt.Println("Prefix is: ", prefix)
	return prefix
}

// Now try to build the sub array sum finder in O(1)

// Create a subArray sum finder. That performs the sum calculation in O(1) time
// nums = []int{5, 2, [  (1), 6, (3)  ], 8} example data
// if subArr nums[i] = 1 (or idx 2); nums[j] = 3 (or idx 4);
// subArr = []int{1, 6, 3}

// 1. Have to first find the prefixArr by running the above function

// prefix = []int{5, 7, [  (8), 14, (17)  ], 25}

// 2. Then subtract using the formula:
// sum = prefix[j] - prefix[i] + nums[i]
// sum = prefix[4] - prefix[2] + nums[2]
// sum = 17 - 8 + 1 = 10
// 3. Result:

// Example

// Given an int arrayt and queries where queries[i] = [x,y] and a limit.
// Return a boolean array representing the answer to each query.
// A query is true if the sum of the subarray from x to y is less than limit
// otherwise return false
//
// For example, given
// nums = [1, 6, 3, 2, 7, 2],
// (prefix) [1,7,10,12,19,21]
//  queries = [[0, 3], [2, 5], [2, 4]], and limit = 13,
// the answer is [true, false, true].
// For each query, the subarray sums are [12, 14, 12].

func AnswerQueries(nums []int, queries [][]int, limit int) []bool {
	prefix := FindArrPrefix(nums)
	ans := []bool{}

	for _, query := range queries {
		fmt.Println("query[0]:", query[0], "prefix[query[0]]", prefix[query[0]])
		fmt.Println("query[1]:", query[1], "prefix[query[1]]", prefix[query[1]])
		fmt.Println("nums[query[0]]", nums[query[0]])

		curr := prefix[query[1]] - prefix[query[0]] + nums[query[0]]
		fmt.Println("Sum: ", curr)
		ans = append(ans, curr < limit)
	}
	fmt.Println("Ans: ", ans)
	return ans
}
