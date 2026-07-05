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
	sum := 0
	maxLen := 0
	curLen := 0

	for end := 0; end < len(nums); end++ {
		sum += nums[end]
		curLen++

		fmt.Println("cLen", curLen)

		for start < end && sum > k {
			fmt.Println("nums[start]", nums[start], "sum", sum, "start", start, "cLen", curLen)
			sum -= nums[start]
			start++
		}

		if curLen > maxLen {
			fmt.Println("sum: ", sum)
			fmt.Println("updating curLen: ", curLen)
			maxLen = curLen
		}

	}

	fmt.Println("maxLen: ", maxLen)
	return maxLen
}

func MaxOnesIII(nums []int, k int) int {
	start := 0
	flipCount := 0
	maxLen := 0

	curLen := 0
	for end := 0; end < len(nums); end++ {
		if nums[end] == 0 {
			flipCount++
		}
		curLen++

		for flipCount > k && start <= end {

			if nums[start] == 0 {
				flipCount--
			}

			curLen--
			start++

			fmt.Println("-- Condition Violated -- ", "\n",
				"start:", start, "end:", end, "\n",
				"curLen:", curLen, "maxLen:", maxLen)
		}

		if curLen > maxLen {
			maxLen = curLen
		}
	}
	fmt.Println("Returning maxLen: ", maxLen)
	return maxLen
}
