package hashing

func TwoSum(nums []int, target int) []int {
	seen := make(map[int]int)

	for idx, val := range nums {
		diff := target - val

		idxDiff, present := seen[diff]
		if present { // check if the value exists inside the map
			return []int{idxDiff, idx}
		}

		seen[val] = idx // remember the current value and its index
	}
	return []int{-1, -1}
}
