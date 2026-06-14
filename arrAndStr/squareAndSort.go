package arrandstr

import "fmt"

// func SquareSort(nums []int) []int {
// 	fmt.Println(nums)
// 	for i, _ := range nums {
// 		nums[i] = nums[i] * nums[i]
// 		// v = v * v
// 		fmt.Println("idx: ", i, "value: ", nums[i])
// 	}
// 	slices.Sort(nums)
// 	fmt.Println(nums)
// 	return nums
// }

// the above implementation of squareSort runs in O(n^2) time.
// I will try to achieve O(n) below

func SquareSort(nums []int) []int {
	res := make([]int, len(nums))
	fmt.Println("nums", nums)

	left := 0
	right := len(nums) - 1
	pos := len(nums) - 1
	for left <= right {
		fmt.Println("res at start of loop", res)
		fmt.Println()

		leftSq := nums[left] * nums[left]
		rightSq := nums[right] * nums[right]

		if leftSq > rightSq {
			res[pos] = leftSq
			left++
			fmt.Println("leftSq > rightSq ", res[pos], "new left", left)

		} else {
			res[pos] = rightSq
			right--
			fmt.Println(" rightSq > leftSq ", res[pos], "new right", right)

		}

		pos--
	}

	return res
}
