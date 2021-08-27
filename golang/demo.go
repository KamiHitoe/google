package main

import "fmt"

func main() {
	for i := 0; i < 10; i++ {
		if i == 3 {
			continue
		}
		fmt.Println(i)
	}

	// while
	j := 0
	for j < 5 {
		fmt.Println(j)
		j++
	}

	// 無限ループ
	k := 0
	for {
		fmt.Println(k)
		k++
		if k == 7 {
			break
		}
	}
}
