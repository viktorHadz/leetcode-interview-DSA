package arrandstr

// Sliding window - static
func MaxAvgSubArr(arr []int, k int) float64 {
	sum := 0

	for i := range k {
		sum += arr[i]
	}

	maxSum := sum

	for i := k; i < len(arr); i++ {
		sum = sum - arr[i-k] + arr[i]

		if sum > maxSum {
			maxSum = sum
		}
	}

	return float64(maxSum) / float64(k)
}
