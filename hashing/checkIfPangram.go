package hashing

import "fmt"

/*
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters,
return true if sentence is a pangram, or false otherwise.
*/

func IsPangram(sentence string) bool {
	alphabet := make(map[rune]struct{})

	for _, v := range sentence {
		alphabet[v] = struct{}{}
	}
	fmt.Println(len(alphabet))
	if len(alphabet) >= 26 {
		return true
	}
	return false
}
