package arrandstr

import "fmt"

func RadiusAvgs(nums []int, k int) []int {
	avgs := make([]int, len(nums))
	subLen := 2*k + 1 // represents the length of the sub array

	// build initial -1 avgs
	for i := range avgs {
		avgs[i] = -1
	}
	// The required subarray cannot fit anywhere
	if subLen > len(nums) {
		return avgs
	}

	fmt.Println("Avgs: ", avgs)

	// build prefixSum
	prefix := []int{nums[0]}
	for i := 1; i < len(nums); i++ {
		prefix = append(prefix, nums[i]+prefix[i-1])
	}
	fmt.Println("prefix", prefix)

	// calc avg[i]
	for i := k; i < len(avgs)-k; i++ {
		start := prefix[i-k]
		end := prefix[i+k]
		avg := end - start + nums[i-k]

		fmt.Printf("end(%v) - start(%v) + nums[i-k](%v) = %v\n", end, start, nums[i-k], avg)
		fmt.Println("--- Calculating average ---")
		fmt.Println("subLen = i + k => ", subLen)
		avg = avg / subLen

		fmt.Println("Final avg to insert: ", avg)
		avgs[i] = avg
	}

	fmt.Println("To return: ", avgs)
	return avgs
}
