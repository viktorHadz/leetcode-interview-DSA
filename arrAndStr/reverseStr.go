package arrandstr

import "fmt"

func ReverseStr(s []byte) {
	var left int = 0
	var right int = len(s) - 1
	fmt.Println("S initial: ", string(s))
	for left < right {
		s[left], s[right] = s[right], s[left]

		fmt.Println("S loop: ", string(s))
		left++
		right--
	}

}
