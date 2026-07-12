package arrandstr

import "fmt"

func RunSum(nums []int) []int {
	prefix := []int{nums[0]}

	for i := 1; i < len(nums); i++ {
		prefix = append(prefix, prefix[i-1]+nums[i])
	}
	a := 32
	b := 7
	fmt.Println("a/b: e.g. avg sum ", a/b)
	fmt.Println("nums", nums)
	fmt.Println("prefix:", prefix)
	return prefix
}
