package arrandstr

import (
	"fmt"
	"math"
)

func MaxAvg(nums []int, k int) float64 {
	sum := 0
	for i := range k {
		sum += nums[i]
	}
	maxSum := sum

	for i := k; i < len(nums); i++ {
		sum := nums[i-k] + nums[i]
		fmt.Println("Sum: ", sum)
		if sum > maxSum {
			maxSum = sum
		}
	}

	fmt.Println("maxSum", float64(maxSum)/float64(k))
	return float64(maxSum) / float64(k)
}

// Sliding window - dynamic
func MinSubArrSum(nums []int, target int) float64 {
	min := math.Inf(+1)
	start := 0
	end := 0
	sum := 0
	for end < len(nums) {
		sum += nums[end]
		end++

		for start < end && sum >= target {
			sum -= nums[start]
			start++
			min = math.Min(min, float64(end-start+1))
			fmt.Println("Start:", start, "End:", end, "Min:", min)
		}
	}

	return min
}

func MaxOnes(nums []int, k int) int {
	max := 0
	left := 0
	sum := 0
	zerosInWindow := 0

	for right := 0; right < len(nums); right++ {
		// Add nums[right] to window (expand)
		if nums[right] == 0 {
			zerosInWindow++
		}
		sum++
		fmt.Println("Zeroes: ", zerosInWindow, "Left: ", left, "Right: ", right, "Max: ", max)
		// While window condition is violated (shrink)
		for zerosInWindow > k {
			if nums[left] == 0 {
				zerosInWindow--
			}
			left++
			// Current window size
			currentSize := right - left + 1
			fmt.Println("--- Shrinking --- ", "Current win size: ", currentSize)
			if currentSize > max {
				max = currentSize
			}
		}
	}
	return int(max)
}

func LongestWithSumLessThan(nums []int, k int) int {
	start := 0
	subLen := 0
	longest := 0
	sum := 0

	for end := 0; end < len(nums); end++ {
		sum += nums[end]
		subLen++
		fmt.Println("++++++++++\n", "Subarray Length: ", subLen, "Longest: ", longest, "Sum: ", sum)
		fmt.Println("Start: ", start, "End: ", end)
		fmt.Println("++++++++++")

		if sum <= k && subLen > longest {
			longest = subLen
			fmt.Println("    Updating longest: ", longest)
		}

		for sum > k {
			sum -= nums[start]
			subLen--
			start++
			fmt.Println("-----------\n Sum > k: ", "Sum: ", sum, "Subarray Length: ", subLen, "Longest: ", longest)
			fmt.Println("Start: ", start, "End: ", end)
			fmt.Println("-----------")
		}

	}
	fmt.Println("LONGEST TO RETURN: ", longest)
	return longest
}
