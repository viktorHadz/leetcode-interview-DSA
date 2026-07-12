package arrandstr

import "fmt"

func MutateSlice() {
	b := []string{"g", "o", "l", "a", "n", "g"}
	fmt.Println("Slice initialized: ", b)

	sub := b[1:4]
	fmt.Println("Sub slice initialized:", sub)

	fmt.Println("Sub slice to mutate: ", sub[0])
	sub[0] = "XXX"
	fmt.Println("Sub slice mutated: ", sub[0])
	fmt.Println("Subslice: ", sub, "Parent slice: ", b)

}
