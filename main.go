package main

import (
	"fmt"

	checkexistence "github.com/viktorHadz/leetcode-interview-DSA/hashing/checkExistence"
)

func main() {
	// CountToTen(0)

	// ------ Arrays And Strings ------- //

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
	// arrAndStr.MaxOnesIII([]int{1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0}, 2)
	// arrAndStr.MaxOnesIII([]int{0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1}, 3)

	// arrAndStr.MutateSlice()
	//
	// Prefix Sum
	// arrAndStr.FindArrPrefix([]int{5, 2, 1, 6, 3, 8})
	// arrAndStr.AnswerQueries([]int{1, 6, 3, 2, 7, 2}, [][]int{{0, 3}, {2, 5}, {2, 4}}, 13)
	// arrandstr.WaysToSplitArray([]int{10, 4, -8, 7, 5})

	//Exercise
	// arrandstr.RunSum([]int{1, 2, 3, 4})
	// arrandstr.RunSum([]int{1, 1, 1, 1, 1})
	// arrandstr.RunSum([]int{3, 1, 2, 10, 1})
	// arrandstr.RunSum([]int{7, 4, 3, 9, 1, 8, 5, 2, 6})

	// arrandstr.MinValToGetPositiveSum([]int{-3, 2, -3, 4, 2})
	// arrandstr.MinValToGetPositiveSum([]int{1, -2, -3})
	// arrandstr.MinValToGetPositiveSum([]int{1, 2})

	// Interesting problem I struggled with at the time but ended up solving
	// arrandstr.RadiusAvgs([]int{7, 4, 3, 9, 1, 8, 5, 2, 6}, 3)

	// ------ Set Implementation ------- //
	// mySet := sets.NewSet[string]()
	// mySet.Add("Earth")
	// mySet.Add("Venus")
	// mySet.Add("Mars")
	// mySet.Add("Earth")
	// mySet.Add("1")

	// mySet.Delete("Venus")
	// fmt.Println(mySet.List())
	// fmt.Println(mySet.Len())
	// fmt.Println(mySet.Contains("Earth"))

	// numSet := sets.NewSet[int]()
	// numSet.Add(1)
	// numSet.Add(2)
	// numSet.Add(3)
	// numSet.Add(3)
	// numSet.Add(3)
	// fmt.Println(numSet.List())
	// fmt.Println(numSet.Len())
	// fmt.Println("--- printing via all method which returns an iterator")
	// for val := range numSet.All() {
	// 	fmt.Println(val)
	// }

	// ------ Strings ------- //
	// fmt.Println(JoinString("Viktor"))
	// StrUTH("Viktor")

	// ------ Hashing ------- //

	// fmt.Println("TwoSum: []int{5, 2, 7, 10, 3, 9}, 8}")
	// fmt.Println("answer found by summing nums at idxs: ",
	// 	hashing.TwoSum([]int{5, 2, 7, 10, 3, 9}, 8))

	// char appears twice
	// fmt.Println("Appears twice: ", checkexistence.FirstLetterToAppearTwice("abccbaacz"))

	fmt.Println(checkexistence.NumsThatSatisfy([]int{1, 2, 4, 4, 7, 8, 10}))

}
