package arrandstr

import "fmt"

// Sliding window - dynamic
func MaxOnes3(nums []int, k int) int {
	left := 0
	flipCount := k
	maxScore := 1

	score := 1

	for right := range nums {
		fmt.Println("left:", left, "right:", right, "score:", score)
		fmt.Println("flipCount:", flipCount)
		fmt.Println("nums[left]:", nums[left], "nums[right]", nums[right])
		fmt.Println("------------------------------")
		if flipCount == 0 {
			left++
			flipCount++
			score = 0
		}

		if nums[right] == 0 {
			flipCount--
		}

		score++
		if score > maxScore {
			maxScore = score
		}
	}
	fmt.Println("maxScore:", maxScore)
	return maxScore

}

func MaxOnes(nums []int, k int) int {
	left := 0
	right := 0

	maxScore := 0
	flipCount := k
	for i := 0; i < len(nums)-1; i++ {
		curr := 0
		for flipCount > 0 && right < len(nums)-1 {
			if nums[i] == 0 {
				flipCount--
			}
			right++
			curr++
			fmt.Println("Current Score =", curr)
		}

		fmt.Println("Left: ", left)
		fmt.Println("Right: ", right)

		left++
		flipCount = k

		if curr > maxScore {
			maxScore = curr
		}
	}

	fmt.Println("Final maxScore = ", maxScore)
	return maxScore
}

// again man i hate being dumb
