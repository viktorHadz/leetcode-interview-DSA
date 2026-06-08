package arrandstr

import (
	"fmt"
	"slices"
)

func SquareSort(nums []int) []int {
	fmt.Println(nums)
	for i, _ := range nums {
		nums[i] = nums[i] * nums[i]
		// v = v * v

		fmt.Println("idx: ", i, "value: ", nums[i])
	}
	slices.Sort(nums)
	fmt.Println(nums)
	return nums
}

// the above implementation of squareSort runs in O(n^2) time.
// I will try to achieve O(n) below
// To do that we could use 2 pointers one for the largest value and one for the current value
// compare botth values and determine if largest needs updating
// if the current number is the new largest put to the right of last else put to left
