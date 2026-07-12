package arrandstr

import (
	"fmt"
)

// 1st value of
// nestedd loops
//
// to return minimum positive value of startValue
// such that the step by step sum is never less than 1

func MinValToGetPositiveSum(nums []int) int {
	prefix := []int{nums[0]}
	minPfxSum := nums[0]

	for i := 1; i < len(nums); i++ {
		prefix = append(prefix, nums[i]+prefix[i-1])
		if prefix[i] < minPfxSum {
			minPfxSum = prefix[i]
		}
		fmt.Println("prefix[i]", prefix[i], "minPrSum: ", minPfxSum)
	}

	startValue := minPfxSum
	if startValue < 0 {
		startValue = -startValue + 1
	} else {
		startValue = 1
	}

	fmt.Println("prefix: ", prefix)
	fmt.Println("minPrSum: ", minPfxSum)
	fmt.Println("startValue: ", startValue)
	return startValue
}
