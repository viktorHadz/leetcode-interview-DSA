package main

import (
	arrAndStr "github.com/viktorHadz/leetcode-interview-DSA/arrAndStr"
)

func main() {
	// CountToTen(0)

	// var arr = []int{1, 2, 3, 4}
	// arrAndStr.TwoPointersMeetMid(arr)

	// var s = []byte("hello")
	// arrAndStr.ReverseStr(s)

	// var s []int = []int{-4, -1, 0, 3, 10}
	// var s []int = []int{-7, -3, 2, 3, 11}
	// arrAndStr.SquareSort(s)

	// Sliding Win - Static
	// arrAndStr.MaxAvgSubArr([]int{1, 12, -5, -6, 50, 3}, 4)
	// arrAndStr.MaxAvg([]int{1, 12, -5, -6, 50, 3}, 4)
	// arrAndStr.MinSubArrSum([]int{2, 3, 1, 2, 4, 3}, 7)
	// Sliding Win - Dynamic
	// arrAndStr.MaxOnes([]int{1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0}, 2)
	// arrAndStr.MaxOnes([]int{0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1}, 3)
	arrAndStr.LongestWithSumLessThan([]int{1, 2, 3, 4, 5}, 8)

}
