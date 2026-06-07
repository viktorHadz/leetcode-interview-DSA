package arrandstr

import "fmt"

// create two pointers at edges of the input
// move them towards each other until they meet
//
// create func that accepts an array
// create 2 pointers left and right
// iterate through array
// on each iteration check if left == right and return where they have met

// Simple example of two pointers
// TwoPointersMeetMid creates two pointers "left" and "end" at start and end of the provided array
// and returns when left == end
func TwoPointersMeetMid(n []int) {

	for i := range n {
		var left = n[i]
		var end = len(n) - 1

		if left == end {
			fmt.Println("Two pointers met at start:", left, "end: ", end)
		}

		left++
		end--
	}
}
