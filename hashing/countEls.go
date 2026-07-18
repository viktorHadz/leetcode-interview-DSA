package hashing

import "fmt"

/*
Given an integer array arr, count how many elements x there are,
such that x + 1 is also in arr.
If there are duplicates in arr, count them separately.
*/
func CountElements(arr []int) int {
	freq := make(map[int]int)

	for _, val := range arr {
		freq[val]++
	}

	fmt.Println("initial ", freq)

	count := 0

	for k, val := range freq {
		fmt.Println("k:", k, "freq[k+1]: ", k+1)
		if _, has := freq[k+1]; has {

			count += val
		}
	}
	fmt.Println(freq)
	return count
}
