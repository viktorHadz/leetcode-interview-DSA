package main

import "fmt"

// Reminder the call to countToTen below will first store all the "End of call" printf statements
// And only print them out after the function meets its base condition

// Simple example of recursion
func CountToTen(i int) {
	if i == 10 {
		return
	}

	fmt.Println(i)
	CountToTen(i + 1)
	fmt.Printf("End of call where i = %v\n", i)
}
