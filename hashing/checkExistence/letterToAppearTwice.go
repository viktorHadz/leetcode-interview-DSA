package checkexistence

import "fmt"

// FirstLetterToAppearTwice returns the first letter whose second occurrence
// appears before the second occurrence of any other letter.
//
// The string s must contain only lowercase English letters and must contain
// at least one repeated letter.
func FirstLetterToAppearTwice(s string) byte {
	seen := make(map[rune]int)
	for _, val := range s {
		_, mapHas := seen[val]
		if mapHas {
			fmt.Println("Found char that repeats in map: ", val, string(val), seen)
			return byte(val)
		}
		seen[val] = 1
	}
	return 0
}
