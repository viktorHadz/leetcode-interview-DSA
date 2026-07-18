package main

import "fmt"

func JoinString(s string) string {
	greeting := "Hello, " + s + "!"
	return greeting
}

func StrUTH(s string) {
	for i, v := range s {
		fmt.Printf("idx: %v; type: %T; val: %v;\n", i, v, v)
	}
}
