package checkexistence

/*
Given an integer array nums, find all the numbers x in nums that
satisfy the following: x + 1 is not in nums, and x - 1 is not in nums.

If a valid number x appears multiple times, you only need to include it in the answer once.
*/
func NumsThatSatisfy(nums []int) []int {
	seen := make(map[int]struct{})
	ans := []int{}
	for _, v := range nums {
		seen[v] = struct{}{}
	}

	for key, _ := range seen {
		_, hasPlus := seen[key+1]
		_, hasMinus := seen[key-1]
		if !hasPlus && !hasMinus {
			ans = append(ans, key)
		}
	}
	return ans
}
